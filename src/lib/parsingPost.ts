import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { sync } from 'glob';

interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

interface Post extends PostMatter {
  content: string;
}

const BASE_PATH = 'public/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);


// 포스트의 메타데이터 파싱
export const parsePostDetail = async (postPath: string) => {
  const file = readFileSync(`${BASE_PATH}/${postPath}`, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content };
};

const parsePost = async (postPath: string): Promise<Post> => {
  const postDetail = await parsePostDetail(postPath);
  console.log(postDetail);
  return {
    ...postDetail,
  };
};

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
};

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(postPaths.map((postPath) => parsePost(postPath)));
  return postList;
};