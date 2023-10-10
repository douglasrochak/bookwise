// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { page } = req.query

  if (!page) {
    return res.status(400).end()
  }

  const books = await prisma.book.findMany({
    include: {
      ratings: true,
    },
    take: 20,
    skip: Number(page) * 3,
  })

  if (!books) {
    return res.status(404).end()
  }

  const booksFormatted = books.map((item) => {
    const totalRatings = item.ratings.length
    const totalScore = item.ratings.reduce((acc, item) => acc + item.rate, 0)
    const rate = Math.round(totalScore / totalRatings)

    return {
      ...item,
      rate,
    }
  })

  return res.status(200).json(booksFormatted)
}
