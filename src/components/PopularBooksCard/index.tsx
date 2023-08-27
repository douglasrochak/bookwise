import Image from 'next/image';
import { Content, PopularBooksCardContainer } from './styles';
import { Stars } from '../Stars';
import { PopularBookData } from '@/@types';

export function PopularBooksCard(popularBookData: PopularBookData) {
  console.log(popularBookData);
  return (
    <PopularBooksCardContainer>
      <Image
        src={popularBookData.cover_url.slice(6).replace('jpg', 'png')}
        width={64}
        height={94}
        alt='livro'
      />
      <Content>
        <div>
          <strong>{popularBookData.name}</strong>
          <span>{popularBookData.author}</span>
        </div>
        <Stars starsNumber={popularBookData.ratings.rate} />
      </Content>
    </PopularBooksCardContainer>
  );
}
