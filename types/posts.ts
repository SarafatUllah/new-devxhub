export interface Link {
  first: string | null;
  last: string | null;
  next: string | null;
  prev: string | null;
}

export interface Meta {
  pagination: {
    count: number;
    limit: number;
    offset: number;
  };
}

export interface Post {
  author: Author;
  categories: Categories[];
  created_at: string;
  id: number;
  image: string | null;
  read_time: string;
  slug: string;
  tags: Tags[];
  title: string;
  url: string;
  description?: string;
  commentCount?: number;
}

export interface Categories {
  id: number;
  name: string;
  slug: string;
}

export interface Tags {
  id: number;
  name: string;
  slug: string;
}

export interface Author {
  avatar: string | null;
  id: number;
  name: string;
  slug: string;
  user: number;
}

export interface Posts {
  link: Link;
  meta: Meta;
  results: Post[];
}

export interface singlePost {
  author: Author;
  categories: Categories[];
  content: string;
  description: string;
  id: number;
  image: string | null;
  read_time: string;
  slug: string;
  tags: Tags[];
  title: string;
  created_at?: string;
}

