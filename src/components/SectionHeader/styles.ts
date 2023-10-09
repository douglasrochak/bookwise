import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
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
