import React from 'react'
import ReactMarkdown from 'react-markdown'
import stls from '@/styles/components/articles/ArticleBlogBigSizeText.module.sass'

type ArticleBlogBigSizeTextType = {
  props: {
    text?: string
    textColor: string
  }
}

const ArticleBlogBigSizeText = ({ props }: ArticleBlogBigSizeTextType) => {
  const { text, textColor } = props

  const customRenderers = {
    em: ({ children }: { children: React.ReactNode }) => (
      <span style={{ color: textColor }}>{children}</span>
    )
  }

  return (
    <div className={stls.text}>
      <ReactMarkdown components={customRenderers}>{text || ''}</ReactMarkdown>
    </div>
  )
}

export default ArticleBlogBigSizeText
