import stls from '@/styles/components/articles/ArticleBlogListWithBackgroundAndTitle.module.sass'
import styles from '@/styles/pages/JournalSlug.module.sass'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import DOMPurify from 'dompurify'

type ArticleBlogListWithBackgroundAndTitleItemType = {
  props: {
    id?: string
    text?: string
    icon?: string
  }
}

const ArticleBlogListWithBackgroundAndTitleItem = ({
  props
}: ArticleBlogListWithBackgroundAndTitleItemType) => {
  const { text, icon } = props
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
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={styles.strongText}>{children}</span>
    )
  }

  return (
    <div className={stls.innerBox}>
      <ReactMarkdown
        className={stls.icon}
        rehypePlugins={[rehypeRaw]}
        components={customRenderers}>
        {sanitizedIcon}
      </ReactMarkdown>
      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListWithBackgroundAndTitleItem
