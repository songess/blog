import { CATEGORY_ARR } from '@/constant/category';

// category type 정의
export type CategoryType = (typeof CATEGORY_ARR)[number];

// 블로그 포스트 타입 정의
export type tempPost = {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  category: CategoryType;
  image: string;
};

// 스니펫 타입 정의
export type Snippet = {
  id: number;
  title: string;
  tags: string[];
  date: string;
};
