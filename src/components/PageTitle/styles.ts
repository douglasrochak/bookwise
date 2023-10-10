import { styled } from '@stitches/react'

export const TitleContainer = styled('div', {
  width: '100%',
  marginTop: '4.5rem',
  marginBottom: '$10',

  display: 'flex',
  justifyContent: 'space-between',
})

export const TitleWrapper = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },
})
