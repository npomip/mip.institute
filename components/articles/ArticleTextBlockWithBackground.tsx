import stls from '@/styles/components/articles/ArticleTextBlockWithBackground.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, {domToReact, attributesToProps } from 'html-react-parser'

type ArticleTextBlockWithBackgroundType = {
  props: {
    text?: string
    borderColor : {
      code: string
      name: string
    }
    backgroundColor : {
      code: string
      name: string
    }
    textColor : {
      code: string
      name: string
    }
  }
  
}

const ArticleTextBlockWithBackground = ({props} : ArticleTextBlockWithBackgroundType) => {

  
  const renderer = new marked.Renderer();
  renderer.paragraph = (text) => {
    return `<p classname=${stls.paragraph} style="color: ${props?.textColor?.code}">${text}</p>`;
  };

  // renderer.strong = (text) => {
  //   return `<strong style="color: ${props?.color?.code}">${text}</strong>`;
  // };
  marked.setOptions({ renderer });

  const text = marked(props.text);


  return (
      <div className={stls.content} style={{background: props?.backgroundColor?.code, border: `1px solid ${props?.borderColor?.code}` }}>
        {parse(text)}
      </div>
  )
}

export default ArticleTextBlockWithBackground