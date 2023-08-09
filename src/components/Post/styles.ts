import { styled } from '@/styles/stitches.config';
import { Card } from '../styles';

export const PostContainer = styled(Card, {
  padding: '$5',
});

export const PostHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const Content = styled('div', {
  display: 'flex',
  gap: '$5',

  marginTop: '$7',

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
});

export const Title = styled('h3', {
  color: '$gray100',
  fontSize: '$md',
});

export const Subtitle = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  lineHeight: '$base',
});
