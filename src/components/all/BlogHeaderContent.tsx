'use client';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import SearchSVG from '@public/svg/search.svg';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import debounce from 'lodash/debounce';
import { searchInputAtom } from '@/store/atom';
import { set } from 'lodash';

export default function BlogHeaderContent({ search }: { search: string }) {
  const { theme, setTheme } = useTheme();
  const [inputValue, setInputValue] = useState(search);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const params = useSearchParams();
  const category = params.get('category');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputRef.current) {
      inputRef.current.focus();
      const valueLength = inputElement?.value.length;
      inputElement?.setSelectionRange(valueLength || 0, valueLength || 0);
    }
  }, []);

  const debouncedHandleChange = useCallback(
    debounce((value: string) => {
      window.location.href = `/blog?category=${category}&search=${value}`;
    }, 500),
    [category]
  );

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (pathname.startsWith('/blog')) {
      debouncedHandleChange(e.target.value);
    }
  };

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, [debouncedHandleChange]);

  useEffect(() => {
    setMounted(true);
    setInputValue(search);
    // setInputValue(params.get('search') || '');
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
                    pathname === '/blog' || pathname.startsWith('/post')
                      ? 'font-bold text-base'
                      : 'font-medium text-base'
                  }
                  variant="ghost"
                >
                  <Link href="/blog?category=전체">Blog</Link>
                </Button>
              </li>
              <li>
                <Button
                  className={
                    pathname.startsWith('/snippets')
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
                type=""
                placeholder="Search..."
                className="pl-8 pr-4"
                ref={inputRef}
                onChange={HandleChange}
                value={inputValue}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/blog?category=전체&search=${inputValue}`;
                  }
                }}
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
