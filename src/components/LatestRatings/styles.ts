import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  '& > div + div': {
    marginTop: '$3',
  },
})
