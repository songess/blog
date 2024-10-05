'use client';
import BlogHeader from '@/components/BlogHeader';
import HomeMain from '@/components/HomeMain';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <HomeMain />
    </div>
  );
}
