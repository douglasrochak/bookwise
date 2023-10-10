import Image from 'next/image'
import { AvatarWithInfo } from '../AvatarWithInfo'
import { Content, PostContainer, PostHeader, Subtitle, Title } from './styles'
import { Stars } from '../Stars'
import { LatestRatingsData } from '@/@types'

interface PostProps extends LatestRatingsData {}

export function Post(postData: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <AvatarWithInfo
          image={postData.user.avatar_url}
          name={postData.user.name}
          time={postData.created_at}
        />
        <Stars rate={postData.rate} />
      </PostHeader>
      <Content>
        <Image
          alt='livro'
          width={108}
          height={152}
          src={postData.book.cover_url.slice(6).replace('jpg', 'png')}
        />
        <div>
          <Title>{postData.book.name}</Title>
          <Subtitle>{postData.book.author}</Subtitle>
          <p>{postData.book.summary}</p>
        </div>
      </Content>
    </PostContainer>
  )
}
