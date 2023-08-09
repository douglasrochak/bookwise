import Image from 'next/image';
import { LoginButton, Navigation, SidebarContainer } from './styles';
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react';

export function Sidebar() {
  return (
    <SidebarContainer>
      <Image src={'/logo.svg'} width={128} height={32} alt='bookwise' />
      <Navigation>
        <ul>
          <li>
            <ChartLineUp size={24} /> Início
          </li>
          <li>
            <Binoculars size={24} /> Explorar
          </li>
        </ul>
      </Navigation>
      <LoginButton type='button'>
        Fazer Login <SignIn size={20} />
      </LoginButton>
    </SidebarContainer>
  );
}
