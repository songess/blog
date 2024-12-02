import { headers } from 'next/headers';
import BlogHeaderContent from './BlogHeaderContent';

export default function BlogHeader() {
  const search = decodeURIComponent(headers().get('x-query-search') || '');
  return (<BlogHeaderContent search={search} />);
}
