import styles from '@/styles/components/articles/ArticleContentLinks.module.sass'
import ArticleOneContentLink from './ArticleOneContentLink'

interface TextChild {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean; // Дополнительно, если появятся другие стили
}

// Интерфейс для объекта с типом paragraph, содержащего массив children
interface Paragraph {
  type: 'paragraph';
  children: TextChild[];
}

// Типизация всего массива, содержащего элементы с типом Paragraph
export type DocumentContent = Paragraph[];

interface ArticleContentLinksProps {
  props: {
    subtitle: DocumentContent
    subtitleSlug: string
    color: string
  }[]
}
const ArticleContentLinks = ({ props }: ArticleContentLinksProps) => {
  
  return (
    <ul className={styles.container}>
      {props?.map(el => (
        <ArticleOneContentLink key={el.subtitleSlug} props={el} />
      ))}
    </ul>
  )
}

export default ArticleContentLinks
