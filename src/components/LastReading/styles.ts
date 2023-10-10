import { styled } from '@/styles/stitches.config'
import { Card } from '../@styles'

export const Container = styled('div', {
  marginBottom: '$10',
})

export const Content = styled(Card, {
  gap: '$5',

  backgroundColor: '$gray600',
})

export const ImageStyle = styled('div', {
  width: '100%',
  maxWidth: 108,
  img: {
    borderRadius: '$md',
  },
})

export const Info = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
})

export const Time = styled('time', {
  lineHeight: '$base',
  color: '$gray400',
  fontSize: '$sm',
})
export const LastHeadingHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$4',
})

export const Title = styled('h3', {
  color: '$gray100',
  fontSize: '$md',
})
export const Subtitle = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  lineHeight: '$base',
})
export const Description = styled('div', {
  marginTop: '$6',

  fontSize: '$sm',
})
