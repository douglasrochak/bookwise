import { styled } from '@/styles/stitches.config';

export const AuthButtonContainer = styled('button', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  borderRadius: '$md',
  padding: '$5',

  span: {
    fontWeight: '$bold',
    fontSize: '$lg',
  },
});
