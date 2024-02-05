import stls from '@/styles/components/articles/ArticleBlogCommentBlock.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, {domToReact, attributesToProps } from 'html-react-parser'

type ArticleBlogCommentBlockType = {
  props: {
    text?: string
    lineColor : {
      code: string
      name: string
    }
  }
  
}

const ArticleBlogCommentBlock = ({props} : ArticleBlogCommentBlockType) => {
  
  const renderer = new marked.Renderer();
  renderer.strong = (text) => {
    return `<span>${text}</span>`;
  };

  marked.setOptions({ renderer });

  const text = marked(props?.text);

  return (
      <div style={{borderLeft: ` 2px solid ${props?.lineColor?.code}`}} className={stls.commentBlock}>
        {parse(text)}
        
      </div>
  )
}

export default ArticleBlogCommentBlock
