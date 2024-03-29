import { ChartLineUp, Icon } from '@phosphor-icons/react'
import { TitleContainer, TitleWrapper } from './styles'
import { ReactNode } from 'react'
import { SearchBar } from '../SearchBar'

type Props = {
  title: string
  Icon: ReactNode
  withSearchBar?: boolean
}

export function PageTitle({ title, Icon, withSearchBar = false }: Props) {
  return (
    <TitleContainer>
      <TitleWrapper>
        {Icon}
        <h2>{title}</h2>
      </TitleWrapper>
      <div style={{ maxWidth: 433, width: '100%' }}>
        {withSearchBar && <SearchBar placeholder='Buscar livro ou autor' />}
      </div>
    </TitleContainer>
  )
}
