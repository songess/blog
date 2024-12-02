import BlogPageContent from '@/components/blog/BlogPageContent';
import { CATEGORY_ARR } from '@/constant/category';
import { getSortedPostList } from '@/lib/parsingPost';
import { CategoryType } from '@/type/type';
import { headers } from 'next/headers';

export default async function BlogPage() {
  const myPosts = await getSortedPostList('posts');
  const category = decodeURIComponent(
    headers().get('x-query-category') || ''
  ) as CategoryType;

  const filteredPosts =
    !category || category === CATEGORY_ARR[0]
      ? myPosts
      : myPosts.filter((post) => post.category === category);

  return <BlogPageContent posts={filteredPosts} category={category} />;
}
