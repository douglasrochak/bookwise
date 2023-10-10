import Image from 'next/image'
import { Content, ExplorerCardContainer } from './styles'
import { Stars } from '../Stars'

type Props = {
  title: string
  subtitle: string
  rate: number
  cover_url: string
}

export function ExplorerCard(CardData: Props) {
  const { title, subtitle, rate, cover_url } = CardData
  return (
    <ExplorerCardContainer>
      <Image
        alt={title}
        width={108}
        height={152}
        src={cover_url.slice(6).replace('jpg', 'png')}
      />
      <Content>
        <div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
        <Stars rate={rate} />
      </Content>
    </ExplorerCardContainer>
  )
}
