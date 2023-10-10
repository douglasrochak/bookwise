import { styled } from '@stitches/react'

export const DefaultLayoutContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  // gridTemplateColumns: '14.5rem 1fr',
  // height: '95vh',
  gap: '6rem',

  main: {
    width: '100%',
  },

  aside: {
    width: '100%',
  },
})
