import React from 'react'
import ReactMarkdown from 'react-markdown'

export type ArticleSubtitleType = {
  props: {
    subtitle?: string
    subtitleSlug?: string
    color: string
  }
}

const ArticleSubtitle = ({ props }: ArticleSubtitleType) => {
  const { subtitle, subtitleSlug, color } = props

  const customRenderers = {
    p: ({ children }: { children: React.ReactNode }) => (
      <h2 id={subtitleSlug}>{children}</h2>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <span style={{ color }}>{children}</span>
    )
  }

  return (
    <ReactMarkdown components={customRenderers}>{subtitle || ''}</ReactMarkdown>
  )
}

export default ArticleSubtitle
