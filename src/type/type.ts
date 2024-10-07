// 블로그 포스트 타입 정의
export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'All' | '운영체제' | 'FE' | 'CS' | '일상';
  image: string;
};

// 스니펫 타입 정의
export type Snippet = {
  id: number;
  title: string;
  tags: string[];
  date: string;
};
