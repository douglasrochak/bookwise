// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const popularBooks = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 5,
  });

  if (!popularBooks) {
    return res.status(404).end();
  }

  const popularBooksFormatted = popularBooks.map((item) => {
    const totalScore = item.ratings.reduce((acc, item) => acc + item.rate, 0);
    const totalRatings = item.ratings.length;

    const rate = Math.round(totalScore / totalRatings);
    const newItem = {
      ...item,
      rate,
    };
    return newItem;
  });

  return res.status(200).json(popularBooksFormatted);
}
