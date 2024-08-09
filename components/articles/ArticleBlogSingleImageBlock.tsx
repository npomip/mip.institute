import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleBlogSingleImageBlock.module.sass'
import Image from 'next/image'

type ArticleBlogSingleImageBlockType = {
  props: {
    alternativeText?: string
    picture: {
      url: string
      width: number
      height: number
    }
  }
}

const ArticleBlogSingleImageBlock = ({
  props
}: ArticleBlogSingleImageBlockType) => {
  return (
    <div className={stls.container}>
      <Image
        src={props.picture.url}
        alt={'alt'}
        className={stls.img}
        width={1170}
        height={750}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    </div>
  )
}

export default ArticleBlogSingleImageBlock
