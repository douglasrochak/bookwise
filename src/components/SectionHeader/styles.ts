import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$5',
})

export const LinkStyle = styled('span', {
  display: 'flex',
  alignItems: 'center',

  color: '$purple100',
  fontSize: '$sm',
  fontWeight: '$bold',

  svg: {
    color: '$purple100',
  },
})
