import PostBody from '@/components/ui/PostBody';
import { parsePostDetail } from '@/lib/parsingPost';
import React from 'react';

export default async function Page() {
  const { data, content } = await parsePostDetail('contents.mdx');
  // console.log(data, content);
  return (
    <div className="px-5">
      <PostBody contentData={content} />
    </div>
  );
}
