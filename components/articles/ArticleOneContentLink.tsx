import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { ArticleSubtitleType } from './ArticleSubtitle'

const ArticleOneContentLink = ({ props }: ArticleSubtitleType) => {
  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    em: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
  }

  return (
    <li>
      <Link href={`#${props.subtitleSlug}`}>
        <ReactMarkdown components={customRenderers}>
          {props?.subtitle}
        </ReactMarkdown>
      </Link>
    </li>
  )
}

export default ArticleOneContentLink
