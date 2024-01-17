import React from "react"
import classNames from 'classnames'
import styles from '@/styles/components/articles/ArticleContentLinks.module.sass'

import ArticleOneContentLink from "./ArticleOneContentLink"

interface ArticleContentLinksProps {
  props : {
    subtitle: string
    subtitleSlug: string
    color: {
      code: string
      name: string
    }
  }[]
}
const ArticleContentLinks = ({ props }:ArticleContentLinksProps) => {

  return (
    <div className={styles.container}>
      <p>Содержание</p>
      {props.map(el => (
        <ArticleOneContentLink key={el.subtitle} props={el} />
      ))}
    </div>
  )
};

export default ArticleContentLinks;
