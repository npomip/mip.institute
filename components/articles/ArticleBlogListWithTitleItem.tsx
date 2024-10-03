import stls from '@/styles/components/articles/ArticleBlogListWithTitle.module.sass'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import DOMPurify from 'dompurify'

type ArticleBlogListWithTitleType = {
  props: {
    id?: string
    text?: string
    title: string
    icon?: string
  }
}

const ArticleBlogListWithTitle = ({ props }: ArticleBlogListWithTitleType) => {
  const { text, title, icon } = props
  const [sanitizedIcon, setSanitizedIcon] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanIcon = DOMPurify.sanitize(icon || '', {
        USE_PROFILES: { svg: true }
      })
      setSanitizedIcon(cleanIcon)
    }
  }, [icon])
  const customRenderers = {
    code: ({ children }: { children: React.ReactNode }) => (
      <div className={stls.icon}>{children}</div>
    ),
    paragraph: ({ children }: { children: React.ReactNode }) => (
      <p>{children}</p>
    )
  }

  return (
    <div className={stls.innerBox}>
      <div className={stls.titleBox}>
        <ReactMarkdown
          className={stls.iconBox}
          components={customRenderers}
          rehypePlugins={[rehypeRaw]}>
          {sanitizedIcon}
        </ReactMarkdown>
        <p className={stls.title}>{title}</p>
      </div>

      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListWithTitle
