import parse from 'html-react-parser'
import marked from 'marked'

export type ArticleSubtitleType = {
  props: {
    subtitle?: string
    subtitleSlug?: string
    color: string
  }
}

const ArticleSubtitle = ({ props }: ArticleSubtitleType) => {
  const renderer = new marked.Renderer()
  renderer.paragraph = text => {
    return `<h2 id=${props.subtitleSlug}>${text}</h2>`
  }

  renderer.em = text => {
    return `<span style="color: ${props?.color}">${text}</span>`
  }
  marked.setOptions({ renderer })

  const h2text = marked(props?.subtitle)

  return <>{parse(h2text)}</>
}

export default ArticleSubtitle
