import { styled } from '@stitches/react';
import { Card } from '../styles';

export const PopularBooksCardContainer = styled(Card, {
  display: 'flex',
  padding: '$5 $4',
  gap: '$5',
});

export const Content = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& > div > span': {
    display: 'block',
  },
});
