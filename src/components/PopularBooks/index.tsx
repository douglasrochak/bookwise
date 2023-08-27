import { api } from '@/lib/axios';
import { PopularBooksCard } from '../PopularBooksCard';
import { PopularBooksContainer } from './styles';
import { useQuery } from 'react-query';
import { BookData } from '@/@types';

export function PopularBooks() {
  const { data: popularBooks, isLoading } = useQuery<BookData[]>(
    ['popular-books'],
    async () => {
      const { data } = await api.get('/books/popular');
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log(popularBooks);

  return (
    <PopularBooksContainer>
      {isLoading
        ? 'CARREGANDO'
        : popularBooks?.map((book) => (
            <PopularBooksCard key={book.id} {...book} />
          ))}
    </PopularBooksContainer>
  );
}
