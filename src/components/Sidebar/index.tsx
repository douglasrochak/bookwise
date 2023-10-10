import Image from 'next/image'
import { LoginButton, Navigation, SidebarContainer } from './styles'
import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <SidebarContainer>
      <Image src={'/logo.svg'} width={128} height={32} alt='bookwise' />
      <Navigation>
        <ul>
          <Link href={'/home'}>
            <li>
              <ChartLineUp size={24} /> Início
            </li>
          </Link>
          <Link href={'/explorer'}>
            <li>
              <Binoculars size={24} /> Explorar
            </li>
          </Link>
          <Link href={'/user'}>
            <li>
              <User size={24} /> Perfil
            </li>
          </Link>
        </ul>
      </Navigation>
      <LoginButton type='button'>
        Fazer Login <SignIn size={20} />
      </LoginButton>
    </SidebarContainer>
  )
}
