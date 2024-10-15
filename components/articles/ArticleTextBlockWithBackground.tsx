import React from 'react'
import ReactMarkdown from 'react-markdown'
import stls from '@/styles/components/articles/ArticleTextBlockWithBackground.module.sass'
import styles from '@/styles/pages/JournalSlug.module.sass'

type ArticleTextBlockWithBackgroundType = {
  props: {
    text?: string
    borderColor: string
    backgroundColor: string
    textColor: string
  }
}

const ArticleTextBlockWithBackground = ({
  props
}: ArticleTextBlockWithBackgroundType) => {
  const customRenderers = {
    p: ({ children }: { children: React.ReactNode }) => (
      <p className={stls.paragraph} style={{ color: props?.textColor }}>
        {children}
      </p>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={styles.strongText}>{children}</span>
    )
  }

  return (
    <div
      className={stls.content}
      style={{
        background: props?.backgroundColor,
        border: `1px solid ${props?.borderColor}`
      }}>
      <ReactMarkdown components={customRenderers}>
        {props.text || ''}
      </ReactMarkdown>
    </div>
  )
}

export default ArticleTextBlockWithBackground
