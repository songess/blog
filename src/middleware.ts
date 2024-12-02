import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path === '/blog') {
    const reqHeaders = new Headers(req.headers);
    const category = req.nextUrl.searchParams.get('category') || '';
    const encodedCategory = encodeURIComponent(category);
    const res = NextResponse.next({
      request: {
        headers: reqHeaders,
      },
    });
    res.headers.set('x-query-category', encodedCategory);
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*'],
};
