import Image from 'next/image';
import {
  AuthBox,
  ContentWrapper,
  HomeContainer,
  IntroImageAndLogo,
  TextBox,
} from './styles';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { AuthButton } from '@/components/AuthButton';

export default function Login() {
  const { data: session } = useSession();
  return (
    <HomeContainer>
      <IntroImageAndLogo>
        <Image
          src={'/images/intro.png'}
          width={600}
          height={880}
          quality={100}
          alt=''
        />
        <Image
          src={'/logo.svg'}
          width={232}
          height={58}
          quality={100}
          alt='bookwise'
        />
      </IntroImageAndLogo>
      <ContentWrapper>
        <TextBox>
          <p>{session ? 'Você esta logado' : 'Você não esta logado'}</p>
          <h3>Boas vindas!</h3>
          <p>Faça seu login ou acesse como visitante.</p>
        </TextBox>
        <AuthBox>
          <AuthButton
            onClick={() => signIn('google')}
            title='Entrar com Google'
            icon='/images/icons/google.svg'
            iconAlt='Google'
          />
          <AuthButton
            onClick={() => signIn('github')}
            title='Entrar com GitHub'
            icon='/images/icons/github.svg'
            iconAlt='Github'
          />
          <Link href='/books'>
            <AuthButton
              title='Acessar como visitante'
              icon='/images/icons/rocket.svg'
              iconAlt=''
            />
          </Link>
        </AuthBox>
      </ContentWrapper>
    </HomeContainer>
  );
}
