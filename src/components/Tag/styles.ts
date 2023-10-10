import { styled } from '@/styles/stitches.config'

export const TagContainer = styled('div', {
  borderRadius: '$full',
  border: '1px solid $purple100 ',

  display: 'inline-block',

  padding: '$1 $4',

  cursor: 'pointer',

  span: {
    color: '$purple100',
    textAlign: 'center',
  },

  '&:hover': {
    opacity: 0.7,
  },

  variants: {
    color: {
      active: {
        backgroundColor: '$purple200',
        border: '1px solid $purple200 ',
        span: {
          color: 'white',
        },
        '&:hover': {
          backgroundColor: 'purple100',
        },
      },
    },
  },
})
