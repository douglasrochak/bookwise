import { PageTitle } from '@/components/PageTitle'
import { Content, ExplorerContainer, TagList } from './styles'
import { Binoculars } from '@phosphor-icons/react'
import { Tag } from '@/components/Tag'
import { ExplorerCard } from '@/components/ExplorerCard'
import { useQuery } from 'react-query'
import { BookData, TagData } from '@/@types'
import { api } from '@/lib/axios'
import { useState } from 'react'

export default function Explorer() {
  const [pagination, setPagination] = useState(0)

  const { data: books } = useQuery<BookData[]>(
    ['books'],
    async () => {
      const { data } = await api.get('/book/books', {
        params: { page: pagination },
      })
      return data
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  const { data: tags } = useQuery<TagData[]>(
    ['tags'],
    async () => {
      const { data } = await api.get('/book/tags', {
        params: { page: pagination },
      })
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
        {tags?.map((tag) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </TagList>
      <Content>
        {books
          ? books.map((book) => (
              <ExplorerCard
                key={book.id}
                cover_url={book.cover_url}
                title={book.name.substring(0, 24)}
                subtitle={book.author}
                rate={book.rate}
              />
            ))
          : null}
      </Content>
    </ExplorerContainer>
  )
}
