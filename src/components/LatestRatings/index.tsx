import { LatestRatingsData } from '@/@types'
import { Post } from '../Post'
import { Container } from './styles'
import { SectionHeader } from '../SectionHeader'

type Props = {
  posts: LatestRatingsData[]
}

export function LatestRatings({ posts }: Props) {
  return (
    <Container>
      <SectionHeader title='Avaliações mais recentes' />
      {posts.map((postData: LatestRatingsData) => (
        <Post {...postData} key={postData.id} />
      ))}
    </Container>
  )
}
