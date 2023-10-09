import { Content, HomeContainer } from './styles'
import { PopularBooks } from '@/components/PopularBooks'
import DefaultLayout from '@/layouts/DefaultLayout'
import { PageTitle } from '@/components/PageTitle'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'
import { LatestRatingsData } from '@/@types'
import { LatestRatings } from '@/components/LatestRatings'
import { LastReading } from '@/components/LastReading'

export default function Home() {
  const { data: latestRatings, isLoading } = useQuery<LatestRatingsData[]>(
    ['latest-ratings'],
    async () => {
      const { data } = await api.get('/rating/latest')
      return data
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  return (
    <DefaultLayout>
      <HomeContainer>
        <PageTitle title='Início' />
        <Content>
          <div>
            <LastReading />
            {latestRatings ? (
              <LatestRatings posts={latestRatings} />
            ) : (
              'CARREGANDO'
            )}
          </div>
          <PopularBooks />
        </Content>
      </HomeContainer>
    </DefaultLayout>
  )
}
