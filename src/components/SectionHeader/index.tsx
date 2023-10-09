import { CaretRight } from '@phosphor-icons/react'
import { Container, LinkStyle } from './styles'
import Link from 'next/link'

type Props = {
  title: string
  link?: string | null
}

export function SectionHeader({ title, link = null }: Props) {
  return (
    <Container>
      <span>{title}</span>
      {link && (
        <Link href={link}>
          <LinkStyle>
            Ver todos <CaretRight size={16} />
          </LinkStyle>
        </Link>
      )}
    </Container>
  )
}
