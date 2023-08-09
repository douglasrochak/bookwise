import { styled } from '@/styles/stitches.config';

export const AvatarWithInfoContainer = styled('div', {
  display: 'flex',
  gap: '$4',
});

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    lineHeight: '$base',
    color: '$gray100',
  },

  time: {
    lineHeight: '$base',
    color: '$gray400',
    fontSize: '$sm',
  },
});
