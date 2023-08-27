import Image from 'next/image';
import { AvatarWithInfo } from '../AvatarWithInfo';
import { Content, PostContainer, PostHeader, Subtitle, Title } from './styles';
import { Stars } from '../Stars';

interface PostProps {
  userName: string;
  postTime: string;
  bookName: string;
  bookSubtitle: string;
  bookDescription: string;
  bookCoverSrc: string;
}

export function Post({
  userName,
  postTime,
  bookName,
  bookSubtitle,
  bookDescription,
  bookCoverSrc,
}: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <AvatarWithInfo name={userName} time={postTime} />
        <Stars />
      </PostHeader>
      <Content>
        <Image
          alt='livro'
          width={108}
          height={152}
          src={bookCoverSrc.slice(6).replace('jpg', 'png')}
        />
        <div>
          <Title>{bookName}</Title>
          <Subtitle>{bookSubtitle}</Subtitle>
          <p>{bookDescription}</p>
        </div>
      </Content>
    </PostContainer>
  );
}
