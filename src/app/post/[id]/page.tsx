import { Badge } from '@/components/ui/badge';
import PostBody from '@/components/ui/PostBody';
import { BASE_POSTS_PATH } from '@/constant/path';
import { getSortedPostList, parsePost } from '@/lib/parsingPost';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  console.log('params', params);
  const BASE_PATH = BASE_POSTS_PATH;
  const p = await parsePost(`${BASE_PATH}/contents.mdx`);
  const c = await getSortedPostList();
  console.log(p, c);
  return (
    <div className="px-5">
      <Image
        src={p.image}
        alt={`${p.title} 썸네일 이미지`}
        width={100}
        height={100}
        className="object-cover object-center w-full h-36 mb-2"
      />
      <div className="flex flex-col gap-2 mb-2">
        <span>
          <Badge variant="secondary">{p.category}</Badge>
        </span>
        <h1 className="text-[40px]">{p.title}</h1>
        <p className="text-gray-600 text-sm">
          {dayjs(p.date).format('YYYY. MM. DD')}
        </p>
      </div>
      <hr className="py-2" />
      <PostBody contentData={p.content} />
    </div>
  );
}
