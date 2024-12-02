import { CATEGORY_ARR } from '@/constant/category';

// category type 정의
export type CategoryType = (typeof CATEGORY_ARR)[number];

// 블로그 포스트 타입 정의
export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  image: string;
  excerpt: string;
  id: string;
  category: 'All' | '운영체제' | 'FE' | 'CS' | '일상';
}

export interface Post extends PostMatter {
  content: string;
}

// 스니펫 타입 정의
export type SnippetMatter = {
  id: number;
  title: string;
  tags: string[];
  date: Date;
  dateString: string;
};

export interface Snippet extends SnippetMatter {
  content: string;
}
