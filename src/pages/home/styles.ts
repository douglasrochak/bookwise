import { styled } from '@stitches/react';

export const HomeContainer = styled('div', {
  marginTop: '4.5rem',
});

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.5fr 20.25rem',
  gap: '4rem',

  marginTop: '$10',
});

export const PostsWrapper = styled('div', {
  '& > div + div': {
    marginTop: '$3',
  },
});
