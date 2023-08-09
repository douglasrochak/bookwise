import { Sidebar } from '@/components/Sidebar';
import { HomeContainer } from './styles';
import { Post } from '@/components/Post';
import { PopularBooks } from '@/components/PopularBooks';
import DefaultLayout from '@/layouts/DefaultLayout';

export default function Home() {
  return (
    // <HomeContainer>
    //   <Sidebar />
    //   <div>
    //     <Post />
    //   </div>
    //   <PopularBooks />
    // </HomeContainer>
    <DefaultLayout>
      <Post />
    </DefaultLayout>
  );
}
