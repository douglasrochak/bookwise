import { styled } from '@/styles/stitches.config';
import sidebarBackground from './sidebar-bg.svg';

export const SidebarContainer = styled('aside', {
  position: 'sticky',
  top: '$5',
  backgroundImage: `url(${sidebarBackground.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  maxWidth: '14.5rem',
  width: '100%',
  height: 'calc(100vh - 2.5rem)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '$md',

  img: {
    margin: '2.5rem 0 4rem',
  },

  button: {},
});

export const Navigation = styled('nav', {
  flexGrow: '1',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',

    li: {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',
      color: '$gray400',
    },
  },

  li: {
    padding: '$2',
  },
});

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  background: 'none',
  fontWeight: '$bold',
  fontSize: '$md',
  color: '$gray200',
  marginBottom: '$6',

  svg: {
    color: '$green100',
  },
});
