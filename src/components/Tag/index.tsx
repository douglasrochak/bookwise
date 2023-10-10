import { TagContainer } from './styles'

type Props = {
  active?: boolean
}

export function Tag({ active = false }: Props) {
  return (
    <TagContainer color={active ? 'active' : undefined}>
      <span>Teste</span>
    </TagContainer>
  )
}
