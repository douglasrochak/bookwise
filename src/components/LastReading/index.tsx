import { SectionHeader } from '../SectionHeader'
import {
  Container,
  Content,
  Title,
  Subtitle,
  Description,
  LastHeadingHeader,
  Time,
  ImageStyle,
  Info,
} from './styles'
import { Stars } from '../Stars'
import Image from 'next/image'

type Props = {
  title: string
  subtitle: string
  description: string
  time: string
  rate: number
  cover_url: string
}

export function LastReading({
  title,
  subtitle,
  description,
  time,
  rate,
  cover_url,
}: Props) {
  return (
    <Container>
      <SectionHeader title='Sua última leitura' link={'/'} />
      <Content>
        <ImageStyle>
          <Image src={cover_url} width={108} height={152} alt={title} />
        </ImageStyle>
        <Info>
          <LastHeadingHeader>
            <Time>{time}</Time>
            <Stars rate={rate} />
          </LastHeadingHeader>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
        </Info>
      </Content>
    </Container>
  )
}
