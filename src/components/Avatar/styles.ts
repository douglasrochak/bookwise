import { styled } from '@/styles/stitches.config';

export const AvatarContainer = styled('div', {
  overflow: 'hidden',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '$full',
  background:
    'linear-gradient(0deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',

  img: {
    border: '2px solid transparent',
    borderRadius: '$full',
  },
});
