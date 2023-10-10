import { styled } from '@/styles/stitches.config'

export const ExplorerContainer = styled('div', {
  width: '100%',
})

export const TagList = styled('div', {
  marginTop: '$12',

  flexWrap: 'wrap',

  display: 'flex',
  gap: '$3',
})

export const Content = styled('div', {
  marginTop: '$12',
  marginBottom: '15rem',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$5',
})
