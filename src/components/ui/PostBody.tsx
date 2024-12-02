import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

interface Props {
  contentData: string;
}

/** TODO
 * 코드블럭 테마 추가하기 (다크모드일 때 자동으로 바뀌게,, 하고싶당)
 */
// const prettyCodeOptions: any = {
//   theme: {
//     dark: JSON.parse(
//       readFileSync('./code_theme/one-dark-pro-darker.json', 'utf-8')
//     ),
//     light: JSON.parse(
//       readFileSync('./code_theme/atom-one-light.json', 'utf-8')
//     ),
//   },
// };

function PostBody({ contentData }: Props) {
  return (
    <main className="codeBlock ">
      <MDXRemote
        source={contentData}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode]],
          },
        }}
      />
    </main>
  );
}

export default PostBody;
