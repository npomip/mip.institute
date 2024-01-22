import React from 'react'
import classNames from 'classnames'
import styles from '@/styles/components/articles/ArticleOneContentLink.module.sass'
import marked from 'marked'
import parse, { domToReact, attributesToProps } from 'html-react-parser'
import { title } from 'process'
import { ArticleSubtitleType } from './ArticleSubtitle'
import Link from 'next/link'

const ArticleOneContentLink = ({ props }: ArticleSubtitleType) => {
  // console.log(props)
  const renderer = new marked.Renderer()
  
  renderer.paragraph = text => {
    return `<p>${text}</p>`
  }
  renderer.strong = text => {
    return `${text}`
  }
  renderer.em = text => {
    return `${text}`
  }
  marked.setOptions({ renderer })

  const h2text = marked(props?.subtitle)

  return <Link href={`#${props.subtitleSlug}`}>{parse(h2text)}</Link>
}

export default ArticleOneContentLink
