import { parsePostDetail } from '@/lib/parsing';
import React from 'react';

export default async function Page() {
  const { data, content } = await parsePostDetail('contents.mdx');
  // console.log(data, content);
  return <div>{content}</div>;
}
