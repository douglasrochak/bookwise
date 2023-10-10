import { styled } from '@stitches/react'
import { Card } from '../@styles'

export const ExplorerCardContainer = styled(Card, {
  maxWidth: 320,
  maxHeight: 184,
  width: '100%',
  height: '100%',

  display: 'flex',
  padding: '$4 $5',
  gap: '$5',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',

  strong: {
    display: 'block',
  },

  span: {
    color: '$gray400',
  },
})
