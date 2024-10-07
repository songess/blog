import { readFileSync } from 'fs';
import matter from 'gray-matter';

/**
 * @param path post의 path
 * @returns post의 data, content
 */
export const parsingPost = async (path: string) => {
  const file = await readFileSync(path, 'utf-8');
  const { data, content } = matter(file);

  return { data, content };
};
