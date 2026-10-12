# One-off: copy the source images into the gallery slots, cropping chrome and
# re-encoding to web-sized JPEGs. Safe to delete after running.
Add-Type -AssemblyName System.Drawing

$gallery = Join-Path $PSScriptRoot '..\src\assets\gallery'
$gallery = (Resolve-Path $gallery).Path

function Convert-Slot {
    param(
        [string]$Source,
        [string]$Slot,
        [int]$MaxWidth = 1400,
        [int]$CropTop = 0,
        [int]$CropBottom = 0,
        [int]$Quality = 82
    )

    if (-not (Test-Path $Source)) {
        Write-Output "MISSING  $Source"
        return
    }

    $img = [System.Drawing.Image]::FromFile($Source)
    $srcX = 0
    $srcY = $CropTop
    $srcW = $img.Width
    $srcH = $img.Height - $CropTop - $CropBottom

    $scale = [Math]::Min(1.0, $MaxWidth / [double]$srcW)
    $outW = [int][Math]::Round($srcW * $scale)
    $outH = [int][Math]::Round($srcH * $scale)

    $bmp = New-Object System.Drawing.Bitmap $outW, $outH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle 0, 0, $outW, $outH
    $g.DrawImage($img, $destRect, $srcX, $srcY, $srcW, $srcH, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $img.Dispose()

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters 1
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), $Quality

    $out = Join-Path $gallery "$Slot.jpg"
    $tmp = Join-Path $gallery "$Slot.tmp.jpg"
    $bmp.Save($tmp, $codec, $params)
    $bmp.Dispose()
    Move-Item -Force $tmp $out

    $size = (Get-Item $out).Length
    Write-Output ("OK  {0,-18} {1,5}x{2,-5} {3,8:N0} bytes" -f "$Slot.jpg", $outW, $outH, $size)
}

$dl = Join-Path $env:USERPROFILE 'Downloads'

# Collections page: crop the browser bookmark bar off the top.
Convert-Slot -Source (Join-Path $dl 'collections.png') -Slot 'sss-collections' -MaxWidth 1400 -CropTop 24
# Razorpay checkout modal: already tight, no crop.
Convert-Slot -Source (Join-Path $dl 'checkout.png') -Slot 'sss-checkout' -MaxWidth 1200
# AURA student club workshop photo.
Convert-Slot -Source (Join-Path $dl 'aura.png') -Slot 'aura-club' -MaxWidth 1400
# Presenting at the lab -> About section window.
Convert-Slot -Source (Join-Path $dl 'work.png') -Slot 'about' -MaxWidth 1400

Write-Output '--- gallery contents ---'
Get-ChildItem $gallery -File | ForEach-Object { "{0,10:N0}  {1}" -f $_.Length, $_.Name }
