import { TagContainer } from './styles'

type Props = {
  name: string
  active?: boolean
}

export function Tag({ name, active = false }: Props) {
  return (
    <TagContainer color={active ? 'active' : undefined}>
      <span>{name}</span>
    </TagContainer>
  )
}
