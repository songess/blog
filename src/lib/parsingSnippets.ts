import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { sync } from 'glob';
import { Snippet, SnippetMatter } from '@/type/type';

const BASE_PATH = 'public/articles';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 스니펫의 메타데이터 파싱
// date를 dateString으로 변환
export const parseSnippetDetail = async (snippetPath: string) => {
  const file = readFileSync(`${snippetPath}`, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as SnippetMatter;
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content };
};

// 스니펫에 대한 메타데이터 요청함수
export const parseSnippet = async (snippetPath: string): Promise<Snippet> => {
  const snippetDetail = await parseSnippetDetail(snippetPath);
  // console.log(snippetDetail);
  return {
    ...snippetDetail,
  };
};

// 스니펫 경로를 가져오는 함수, category의 폴더를 반환해야 한다.
export const getsnippetPaths = (category?: string) => {
  const folder = category || '**';
  const snippetPaths: string[] = sync(`${POSTS_PATH}/${folder}/*.mdx`);
  return snippetPaths;
};

// 스니펫 리스트를 가져오는 함수
const getSnippetList = async (category?: string): Promise<Snippet[]> => {
  const snippetPaths = getsnippetPaths(category);
  // console.log('snippetPaths', snippetPaths);
  const snippetList = await Promise.all(
    snippetPaths.map((snippetPath) => parseSnippet(snippetPath))
  );
  return snippetList;
};

// post를 날짜 최신순으로 정렬
const sortSnippetList = (snippetList: Snippet[]) => {
  return snippetList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

// 정렬된 스니펫 리스트 반환함수
export const getSortedSnippetList = async (
  category?: string
): Promise<Snippet[]> => {
  const snippetList = await getSnippetList(category);
  // console.log('postlist', snippetList);
  return sortSnippetList(snippetList);
};
