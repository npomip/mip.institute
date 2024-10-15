import stls from '@/styles/components/articles/ArticleBlogCommentBlock.module.sass'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type ArticleBlogCommentBlockType = {
  props: {
    text?: string
    lineColor: string
  }
}

const ArticleBlogCommentBlock = ({ props }: ArticleBlogCommentBlockType) => {
  const { text, lineColor } = props

  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span>{children}</span>
    )
  }

  return (
    <div
      style={{ borderLeft: `2px solid ${lineColor}` }}
      className={stls.commentBlock}>
      <ReactMarkdown components={customRenderers}>{text || ''}</ReactMarkdown>
    </div>
  )
}

export default ArticleBlogCommentBlock
