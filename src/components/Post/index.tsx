import Image from 'next/image';
import { AvatarWithInfo } from '../AvatarWithInfo';
import { Content, PostContainer, PostHeader, Subtitle, Title } from './styles';
import { Stars } from '../Stars';

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <AvatarWithInfo name='Douglas Rochak' time='Hoje' />
        <Stars />
      </PostHeader>
      <Content>
        <Image
          alt='livro'
          width={108}
          height={152}
          src={
            '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'
          }
        />
        <div>
          <Title>O Hobbit</Title>
          <Subtitle>J.R.R. Tolkien</Subtitle>
          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </p>
        </div>
      </Content>
    </PostContainer>
  );
}
