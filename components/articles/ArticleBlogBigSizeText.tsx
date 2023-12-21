import stls from '@/styles/components/articles/ArticleBlogBigSizeText.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, {domToReact, attributesToProps } from 'html-react-parser'

type ArticleBlogBigSizeTextType = {
  props: {
    text?: string
    textColor : {
      code: string
    }
  }
  
}

const ArticleBlogBigSizeText = ({props} : ArticleBlogBigSizeTextType) => {
  
  const renderer = new marked.Renderer();
  renderer.em = (text) => {
    return `<span style="color: ${props?.textColor?.code}">${text}</span>`;
  };

  // renderer.em = (text) => {
  //   return `<span style="color: ${props?.color?.code}">${text}</span>`;
  // };
  marked.setOptions({ renderer });

  const text = marked(props?.text);


  return (
      <div className={stls.text}>
        {parse(text)}
        
      </div>
  )
}

export default ArticleBlogBigSizeText
