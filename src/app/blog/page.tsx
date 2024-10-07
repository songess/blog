'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { DUMMYposts } from '@/constant/data';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('All');
  const posts = DUMMYposts;

  const filteredPosts =
    activeTab === 'All'
      ? posts
      : posts.filter((post) => post.category === activeTab);

  return (
    <div className="container mx-auto pb-8 px-4">
      <Tabs
        defaultValue="All"
        className="mb-8 w-fit"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="All">전체</TabsTrigger>
          <TabsTrigger value="운영체제">운영체제</TabsTrigger>
          <TabsTrigger value="FE">FE</TabsTrigger>
          <TabsTrigger value="CS">CS</TabsTrigger>
          <TabsTrigger value="일상">일상</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredPosts.map((post, index) => (
          <Card
            key={index}
            className="cursor-pointer"
            onClick={() => {
              router.push(`/post/${post.id}`);
            }}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden h-[192px] w-full">
                <Image
                  src={'/png/beulping.png'}
                  alt="썸네일"
                  className="object-cover transform transition-transform duration-300 hover:scale-105"
                  fill
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4 gap-4 pt-[24px]">
              <h3 className="font-semibold line-clamp-1">{post.title}</h3>
              <div className="flex items-center justify-between w-full">
                <Badge variant="secondary">{post.category}</Badge>
                <time className="text-sm text-muted-foreground">
                  {post.date}
                </time>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          이 카테고리에는 아직 게시물이 없습니다.
        </p>
      )}
    </div>
  );
}
