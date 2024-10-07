import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

interface Props {
  contentData: string;
}

function PostBody({ contentData }: Props) {
  return (
    <div>
      <MDXRemote
        source={contentData}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode]],
          },
        }}
      />
    </div>
  );
}

export default PostBody;
