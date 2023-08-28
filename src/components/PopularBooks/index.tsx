import { api } from '@/lib/axios';
import { PopularBooksCard } from '../PopularBooksCard';
import { PopularBooksContainer } from './styles';
import { useQuery } from 'react-query';
import { PopularBookData } from '@/@types';

export function PopularBooks() {
  const { data: popularBooks, isLoading } = useQuery<PopularBookData[]>(
    ['popular-books'],
    async () => {
      const { data } = await api.get('/book/popular');
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

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
