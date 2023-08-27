import { styled } from '@stitches/react';

export const PopularBooksContainer = styled('div', {
  '& > div + div': {
    marginTop: '$3',
  },
});
