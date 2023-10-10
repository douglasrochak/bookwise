import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchBarContainer, SearchBarInput } from './styles'

type Props = {
  placeholder: string
}

export function SearchBar({ placeholder }: Props) {
  return (
    <SearchBarContainer>
      <SearchBarInput type='text' placeholder={placeholder} />
      <MagnifyingGlass size={20} />
    </SearchBarContainer>
  )
}
