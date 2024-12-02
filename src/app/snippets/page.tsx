import SnippetsPageContent from '@/components/snippets/SnippetsPageConent';
import { getSortedSnippetList } from '@/lib/parsingSnippets';

export default async function SnippetsPage() {
  const snippets = await getSortedSnippetList('snippets');
  console.log('snippets', snippets);
  return <SnippetsPageContent snippets={snippets} />;
}
