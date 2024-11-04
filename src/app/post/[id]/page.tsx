import PostBody from '@/components/ui/PostBody';
import { BASE_POSTS_PATH } from '@/constant/path';
import { getSortedPostList, parsePost } from '@/lib/parsingPost';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  console.log('params', params);
  const BASE_PATH = BASE_POSTS_PATH;
  const p = await parsePost(`${BASE_PATH}/contents.mdx`);
  const c = await getSortedPostList('posts');
  console.log('p,c', p, c);
  return (
    <div className="px-5">
      <PostBody contentData={p.content} />
    </div>
  );
}
