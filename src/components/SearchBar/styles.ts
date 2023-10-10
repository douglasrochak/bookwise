import { styled } from '@/styles/stitches.config'

export const SearchBarContainer = styled('div', {
  width: '100%',
  maxWidth: 433,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  border: '1px solid $gray500',
  borderRadius: '$sm',
  paddingRight: '$5',

  svg: {
    color: '$gray500',
  },
})

export const SearchBarInput = styled('input', {
  width: '100%',

  fontSize: '$sm',
  padding: '$3 $5',

  color: '$gray200',
  backgroundColor: 'transparent',
  border: 'none',

  '&:focus': {
    outline: 'none',
  },
})
