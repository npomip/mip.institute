import stls from '@/styles/components/articles/ArticleBlogList.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'

type ArticleBlogListItemType = {
  props: {
      id?: string
      text?: string
      icon?: string
  }
  
}

const ArticleBlogListItem = ({props} : ArticleBlogListItemType) => {
  const {text, icon } = props;

  const renderer = new marked.Renderer();
  renderer.code = (text) => {
    return `<span classname=${stls.icon}>${text}</span>`;
  };
  renderer.paragraph = (text) => {
    return `<p classname=${stls.papap}>${text}</p>`
  }
  marked.setOptions({ renderer });

  const parsedIcon = marked(props.icon);
  


  return (
      <div className={stls.innerBox}>
        <div className={stls.icon}>
        {parse(parsedIcon)}
        </div>
      <p>{parse(text)}</p>
      </div>
  )
}

export default ArticleBlogListItem