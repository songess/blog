import PostBody from '@/components/ui/PostBody';
import { BASE_SNIPPETS_PATH } from '@/constant/path';
import { getSortedPostList, parsePost } from '@/lib/parsingPost';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  console.log(params);
  const BASE_PATH = BASE_SNIPPETS_PATH;
  const p = await parsePost(`${BASE_PATH}/contentss.mdx`);
  const c = await getSortedPostList('posts');
  console.log(p, c);
  return (
    <div className="px-5">
      <PostBody contentData={p.content} />
    </div>
  );
}
