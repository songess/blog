'use client';

import { useEffect, useState } from 'react';
import RightIcon from '@public/svg/angle-double-right.svg';
import LeftIcon from '@public/svg/angle-double-left.svg';

interface TocProps {
  id: string;
  tag: number;
  content: string;
}

function PostIndex() {
  const [isView, setIsView] = useState(false);
  const [tocList, setTocList] = useState<TocProps[] | null>(null);
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    );

    const tocTemp: TocProps[] = [];
    headings.forEach((heading, idx) => {
      if (idx != 0) {
        //0은 post 제목이라 제외
        const id = `h-${idx}`;
        heading.id = id;
        const tag = Number(heading.tagName.slice(1));
        const content = heading.textContent || '';
        tocTemp.push({ id, tag, content });
      }
    });

    setTocList(tocTemp);
  }, []);

  const getMargin = (tagOrder: number) => {
    return `ml-${tagOrder - 1}`;
  };

  const scrollToHeading = async (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const dest = el.offsetTop - 68;
      window.scrollTo({ top: dest, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-1/2 cursor-pointer text-white right-5 flex items-center gap-1">
      <div
        className="animate-bounce_toc bg-gray-50 w-9 h-9 border border-gray-200 rounded-full relative shadow-lg"
        onClick={() => setIsView((prev) => !prev)}
      >
        {isView ? (
          <RightIcon className="absolute top-[5px] left-[6px]" />
        ) : (
          <LeftIcon className="absolute top-[5px] left-[6px]" />
        )}
      </div>
      {isView && (
        <nav
          className={`rounded-md py-4 px-5 text-gray-300 flex flex-col gap-1`}
        >
          {tocList &&
            tocList.map((item) => (
              <div
                key={item.id}
                className={`${getMargin(
                  item.tag
                )} hover:text-black cursor-pointer`}
                onClick={() => scrollToHeading(item.id)}
              >
                <button>{item.content}</button>
              </div>
            ))}
        </nav>
      )}
    </div>
  );
}

export default PostIndex;
