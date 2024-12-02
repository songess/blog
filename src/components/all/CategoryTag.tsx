'use client';

import { Badge } from '../ui/badge';

interface Props {
  category: string;
}

/**
 * 클릭하면 해당 카테고리 리스트로 이동하는 Badge
 */
function CategoryTag({ category }: Props) {
  return (
    <span
      onClick={() => (window.location.href = `/blog?category=${category}`)}
      className="cursor-pointer hover:shadow-md w-fit rounded-md"
    >
      <Badge variant="secondary">{category}</Badge>
    </span>
  );
}

export default CategoryTag;
