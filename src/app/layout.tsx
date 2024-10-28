import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import BlogHeader from '@/components/all/BlogHeader';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Welcome to my blog!',
  icons: {
    icon: '/png/beulping.png',
  },
  openGraph: {
    title: 'Blog',
    images: [
      {
        url: '/png/beulping.png',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
        />
      </head>
      <body className="pt-[70px]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BlogHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
