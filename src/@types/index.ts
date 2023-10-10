export interface UserData {
  id: string
  name: string
  avatar_url: string
  created_at: string
}

export interface TagData {
  id: string
  name: string
}

export interface BookData {
  id: string
  name: string
  author: string
  summary: string
  rate: number
  cover_url: string
  total_pages: number
  created_at: string
}

export interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
}

export interface PopularBookData extends BookData {
  ratings: Rating
  rate: number
}

export interface LatestRatingsData {
  id: string
  rate: number
  description: string
  created_at: string
  book: BookData
  user: UserData
  rating: Rating
}

export interface LastReadingData {}

// export interface PopularBookData {
//   id: string;
//   name: string;
//   author: string;
//   summary: string;
//   coverUrl: string;
//   totalPages: number;
//   createdAt: string;
// }
