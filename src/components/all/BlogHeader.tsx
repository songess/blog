'use client';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import SearchSVG from '@public/svg/search.svg';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlogHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out z-50 bg-background ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            className="text-2xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
            href="/"
          >
            🎃
          </Link>
          <nav>
            <ul className="flex">
              <li>
                <Button
                  className={
                    pathname === '/about'
                      ? 'font-bold text-base'
                      : 'font-medium text-base'
                  }
                  variant="ghost"
                >
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button
                  className={
                    pathname === '/blog'
                      ? 'font-bold text-base'
                      : 'font-medium text-base'
                  }
                  variant="ghost"
                >
                  <Link href="/blog">Blog</Link>
                </Button>
              </li>
              <li>
                <Button
                  className={
                    pathname === '/snippets'
                      ? 'font-bold text-base'
                      : 'font-medium text-base'
                  }
                  variant="ghost"
                >
                  <Link href="/snippets">Snippets</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {(pathname.startsWith('/blog') || pathname.startsWith('/post')) && (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-4"
              />
              <SearchSVG className="h-4 w-4 absolute left-2.5 top-3 text-gray-500" />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
