import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const tags = await prisma.category.findMany({})

  if (!tags) {
    return res.status(404).json({ error: 'No tags found' })
  }

  return res.status(200).json(tags)
}
