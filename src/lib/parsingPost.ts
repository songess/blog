import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { sync } from 'glob';
import { CategoryType } from '@/type/type';

interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  image: string;
  excerpt: string;
  id: string;
  category: CategoryType;
}

export interface Post extends PostMatter {
  content: string;
}

const BASE_PATH = 'public/articles';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 포스트의 메타데이터 파싱
// date를 dateString으로 변환
export const parsePostDetail = async (postPath: string) => {
  const file = readFileSync(`${postPath}`, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content };
};

// 포스트에 대한 메타데이터 요청함수
export const parsePost = async (postPath: string): Promise<Post> => {
  const postDetail = await parsePostDetail(postPath);
  // console.log(postDetail);
  return {
    ...postDetail,
  };
};

// 포스트 경로를 가져오는 함수, category의 폴더를 반환해야 한다.
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/*.mdx`);
  return postPaths;
};

// 포스트 리스트를 가져오는 함수
const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  // console.log('postPaths', postPaths);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  return postList;
};

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

// 정렬된 포스트 리스트 반환함수
export const getSortedPostList = async (category?: string): Promise<Post[]> => {
  const postList = await getPostList(category);
  // console.log('postlist', postList);
  return sortPostList(postList);
};
