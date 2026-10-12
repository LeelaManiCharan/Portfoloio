# Image slots — drop your pictures here

Any image you put in this folder shows up on the site automatically.
The **file name** decides where it lands. Extension can be `.jpg`, `.jpeg`,
`.png`, `.webp`, `.avif` or `.svg`.

Currently filled: `portrait`, `about`, `aura-club`, `sss-collections`,
`sss-checkout`.

| File name                 | Where it appears                                   | Suggested size |
| ------------------------- | -------------------------------------------------- | -------------- |
| `portrait.jpg`            | Hero frame, nav avatar, footer, Gallery            | 800 × 1000     |
| `about.jpg`               | About section side window                          | 1200 × 900     |
| `sss-collections.jpg`     | Sri Sai Shopping screenshot — Collections          | 1400 × 900     |
| `sss-checkout.jpg`        | Sri Sai Shopping screenshot — Checkout             | 1200 × 900     |
| `sri-sai-shopping.png`    | Sri Sai Shopping project card                      | 1600 × 1000    |
| `university-website.png`  | University Website project card                    | 1600 × 1000    |
| `cropeasy.png`            | Cropeasy project card                              | 1600 × 1000    |
| `aura-club.jpg`           | Leadership card + Gallery                          | 1200 × 800     |
| `desk-setup.jpg`          | Gallery                                            | 1200 × 800     |
| `talk.jpg`                | Gallery                                            | 1200 × 800     |
| `team.jpg`                | Gallery                                            | 1200 × 800     |
| `certificate.jpg`         | Gallery                                            | 1200 × 800     |

While developing, an empty slot renders a dashed placeholder naming the file it
wants. Production builds drop those placeholders entirely, so unfilled slots
never reach a visitor.

Want more gallery slots or different captions? Edit the `gallery` array in
`src/data/profile.ts`. To import and compress new files in bulk, add
`Convert-Slot` calls to `scripts/import-images.ps1`.
