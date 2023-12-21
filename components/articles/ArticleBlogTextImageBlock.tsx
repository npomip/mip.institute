import stls from '@/styles/components/articles/ArticleBlogTextImageBlock.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, {domToReact, attributesToProps } from 'html-react-parser'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'

type ArticleBlogTextImageBlockType = {
  props: {
    text?: string
    image : {
      url: string
      width: number
      height: number
    }
  }              
}

const ArticleBlogTextImageBlock = ({props} : ArticleBlogTextImageBlockType) => {

  const text = marked(props?.text);

  return (
      <div className={stls.container}>
        <div className={stls.imgContainer}>
          <Image
          src={props?.image?.url}
          alt={'alt'}
          className={stls.img}
          // layout='fill'
          width={470}
          height={624}
          placeholder='blur'
          blurDataURL={base64pixel}
          />
        </div>
        <div className={stls.text}>
          {parse(text)}
        </div>
      
      </div>
  )
}

export default ArticleBlogTextImageBlock