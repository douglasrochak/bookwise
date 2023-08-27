import { Content, HomeContainer, PostsWrapper } from './styles';
import { Post } from '@/components/Post';
import { PopularBooks } from '@/components/PopularBooks';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Title } from '@/components/Title';
import { api } from '@/lib/axios';
import { useQuery } from 'react-query';
import { LatestRatingsData } from '@/@types';

export default function Home() {
  const { data: latestRatings, isLoading } = useQuery<LatestRatingsData[]>(
    ['latest-ratings'],
    async () => {
      const { data } = await api.get('/ratings/latest');
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <DefaultLayout>
      <HomeContainer>
        <Title title='Início' />
        <Content>
          <PostsWrapper>
            {isLoading
              ? 'CARREGANDO'
              : latestRatings?.map((postData: LatestRatingsData) => (
                  <Post
                    userName={postData.user.name}
                    postTime={postData.created_at}
                    bookName={postData.book.name}
                    bookCoverSrc={postData.book.cover_url}
                    bookDescription={postData.book.summary}
                    bookSubtitle={postData.book.author}
                    key={postData.id}
                  />
                ))}
          </PostsWrapper>
          <PopularBooks />
        </Content>
      </HomeContainer>
    </DefaultLayout>
  );
}
