import { PageTitle } from '@/components/PageTitle'
import { SearchBar } from '@/components/SearchBar'
import { SectionHeader } from '@/components/SectionHeader'
import { User as UserIcon } from '@phosphor-icons/react'

export default function User() {
  return (
    <div>
      <PageTitle title='Perfil' Icon={<UserIcon size={24} />} />
      <SearchBar placeholder='Buscar livro ou autor' />
    </div>
  )
}
