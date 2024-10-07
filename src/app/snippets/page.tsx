'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { DUMMYsnippets } from '@/constant/data';
import { useRouter } from 'next/navigation';

export default function SnippetsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const snippets = DUMMYsnippets;

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTags.length === 0 ||
        selectedTags.some((tag) => snippet.tags.includes(tag)))
  );

  const allTags = Array.from(
    new Set(snippets.flatMap((snippet) => snippet.tags))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto pb-8 h-full px-4">
      <div className="mb-6 space-y-4">
        <Input
          type="search"
          placeholder="스니펫 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="rounded-md border p-4">
          <div className="flex flex-wrap gap-2 items-center">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
        {selectedTags.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">선택된 태그:</span>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <Button
                  key={tag}
                  variant="secondary"
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className="rounded-full"
                >
                  {tag}
                  <X className="w-4 h-4 ml-2" />
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSnippets.map((snippet) => (
          <Card
            key={snippet.id}
            className="flex flex-col cursor-pointer hover:shadow-md"
            onClick={() => {
              router.push(`/snippets/${snippet.id}`);
            }}
          >
            <CardHeader>
              <CardTitle className="text-lg">{snippet.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mt-2">
                {snippet.tags.map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleTag(tag)}
                    className="rounded-full text-xs"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
              <time className="text-xs text-muted-foreground mt-2 block">
                {snippet.date}
              </time>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSnippets.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  );
}
