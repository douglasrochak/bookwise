import { ChartLineUp } from '@phosphor-icons/react'
import { TitleContainer } from './styles'

interface TitleProps {
  title: string
}

export function PageTitle({ title }: TitleProps) {
  return (
    <TitleContainer>
      <ChartLineUp size={32} />
      <h2>{title}</h2>
    </TitleContainer>
  )
}
