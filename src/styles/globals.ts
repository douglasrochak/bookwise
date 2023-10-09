import { globalCss } from '@stitches/react'
import { styled } from './stitches.config'

export const Main = styled('div', {
  height: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '$5 0',
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    textDecoration: 'none',
  },

  li: {
    listStyle: 'none',
  },

  button: {
    border: 0,
    backgroundColor: '$gray600',
    color: '$gray200',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$gray700',
      transition: 'background-color .2s',
    },
  },
})
