import { styled } from '@/styles/stitches.config';

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const ContentWrapper = styled('div', {
  margin: '0 auto',
});

export const IntroImageAndLogo = styled('div', {
  position: 'relative',
  height: '100%',

  'img:nth-child(1)': {
    borderRadius: '$lg',
    maxHeight: '100%',
  },

  'img:nth-child(2)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export const TextBox = styled('div', {
  marginBottom: '$10',

  h3: {
    lineHeight: '$short',
    fontSize: '$2xl',
  },

  p: {
    lineHeight: '$base',
  },
});

export const AuthBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});
