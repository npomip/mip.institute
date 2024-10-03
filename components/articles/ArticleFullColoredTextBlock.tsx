import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '@/styles/pages/JournalSlug.module.sass'

type ArticleFullColoredTextBlockType = {
  props: {
    text?: string
    textColor?: string
  }
}

const ArticleFullColoredTextBlock = ({
  props
}: ArticleFullColoredTextBlockType) => {
  const customRenderers = {
    em: ({ children }: { children: React.ReactNode }) => (
      <span style={{ color: props?.textColor }}>{children}</span>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={styles.strongText}>{children}</span>
    ),
    p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>
  }

  return (
    <ReactMarkdown components={customRenderers}>
      {props.text || ''}
    </ReactMarkdown>
  )
}

export default ArticleFullColoredTextBlock
