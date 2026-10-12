type Props = {
  index: string
  title: string
  kicker?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ index, title, kicker, align = 'left' }: Props) {
  return (
    <header
      className={`section-heading section-heading--${align}`}
      data-reveal="up"
    >
      <span className="section-heading__index">{index}</span>
      <h2 className="section-heading__title">{title}</h2>
      {kicker && <p className="section-heading__kicker">{kicker}</p>}
    </header>
  )
}
