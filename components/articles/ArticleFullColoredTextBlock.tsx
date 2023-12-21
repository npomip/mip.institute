import stls from '@/styles/components/articles/ArticleFullColoredTextBlock.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, {domToReact, attributesToProps } from 'html-react-parser'

type ArticleFullColoredTextBlockType = {
  props: {
    text?: string
    textColor? : {
      code: string
      name: string
    }
  }
  
}

const ArticleFullColoredTextBlock = ({props} : ArticleFullColoredTextBlockType) => {
  // console.log(marked(props.text))
  const renderer = new marked.Renderer();
  renderer.paragraph = (text) => {
    return `<p>${text}</p>`;
  };
  renderer.em = function (text) {
    return `<span style="color: ${props?.textColor?.code}">${text}</span>`;
  };

  marked.setOptions({ renderer });

  const text = marked(props.text);


  return (
      <>
        {parse(text)}
      </>
  )
}

export default ArticleFullColoredTextBlock
