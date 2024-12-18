import stls from '@/styles/components/articles/ArticleBlogListWithTitle.module.sass'

type ArticleBlogListWithTitleType = {
  props: {
    id?: string
    text?: string
    title: string
    icon?: string
  }
  icon: string
}

const ArticleBlogListWithTitle = ({ props, icon }: ArticleBlogListWithTitleType) => {
  const { text, title } = props

  return (
    <div className={stls.innerBox}>
      <div className={stls.titleBox}>
        <div className={stls.iconBox}><span dangerouslySetInnerHTML={{ __html: icon }} /></div>
        <p className={stls.title}>{title}</p>
      </div>

      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListWithTitle
