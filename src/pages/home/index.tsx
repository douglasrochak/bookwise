import { Content, HomeContainer } from './styles'
import { PopularBooks } from '@/components/PopularBooks'
import DefaultLayout from '@/layouts/DefaultLayout'
import { PageTitle } from '@/components/PageTitle'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'
import { LatestRatingsData } from '@/@types'
import { LatestRatings } from '@/components/LatestRatings'
import { LastReading } from '@/components/LastReading'
import { ChartLineUp } from '@phosphor-icons/react'

export default function Home() {
  const { data: latestRatings } = useQuery<LatestRatingsData[]>(
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
    <HomeContainer>
      <PageTitle Icon={<ChartLineUp size={32} />} title='Início' />
      <Content>
        <div>
          <LastReading
            cover_url=''
            title='teste'
            subtitle='teste'
            description='Teste'
            time='teste'
            rate={1}
          />
          {latestRatings ? (
            <LatestRatings posts={latestRatings} />
          ) : (
            'CARREGANDO'
          )}
        </div>
        <PopularBooks />
      </Content>
    </HomeContainer>
  )
}
