import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchBarContainer, SearchBarInput } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarInput type='text' placeholder='Buscar livro ou autor' />
      <MagnifyingGlass size={20} />
    </SearchBarContainer>
  )
}
