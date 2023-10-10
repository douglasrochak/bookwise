import { PageTitle } from '@/components/PageTitle'
import { Content, ExplorerContainer, TagList } from './styles'
import { Binoculars } from '@phosphor-icons/react'
import { Tag } from '@/components/Tag'
import { ExplorerCard } from '@/components/ExplorerCard'
import { useQuery } from 'react-query'
import { BookData } from '@/@types'
import { api } from '@/lib/axios'

export default function Explorer() {
  const { data: books } = useQuery<BookData[]>(
    ['books'],
    async () => {
      const { data } = await api.get('/book/books')
      return data
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  return (
    <ExplorerContainer>
      <PageTitle
        Icon={<Binoculars size={32} />}
        title='Explorar'
        withSearchBar
      />
      <TagList>
        <Tag active />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </TagList>
      <Content>
        {books
          ? books.map((book) => (
              <ExplorerCard
                key={book.id}
                cover_url={book.cover_url}
                title={book.name}
                subtitle={book.summary}
                rate={book.rate}
              />
            ))
          : null}
      </Content>
    </ExplorerContainer>
  )
}
