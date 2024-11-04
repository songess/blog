import BlogPageContent from '@/components/blog/BlogPageContent';
import { getSortedPostList } from '@/lib/parsingPost';

export default async function BlogPage() {
  const myPosts = await getSortedPostList('posts');
  return <BlogPageContent posts={myPosts} />;
}
