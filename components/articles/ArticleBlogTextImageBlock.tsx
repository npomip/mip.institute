import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleBlogTextImageBlock.module.sass'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

type ArticleBlogTextImageBlockType = {
  props: {
    text?: string
    image: {
      url: string
      width: number
      height: number
    }
  }
}

const ArticleBlogTextImageBlock = ({
  props
}: ArticleBlogTextImageBlockType) => {
  return (
    <div className={stls.container}>
      <div className={stls.imgContainer}>
        <Image
          src={props?.image?.url}
          alt={'alt'}
          className={stls.img}
          width={470}
          height={624}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.text}>
        <ReactMarkdown>{props?.text}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ArticleBlogTextImageBlock
