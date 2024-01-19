import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'
import { BtnAlpha } from '../btns'
import routes from '@/config/routes'
import Link from 'next/link'

type RelatedProgramsListType = {
  program: {
    id: string
    title: string
    type: string
    slug: string
    studyFieldSlug: string
    heroPicture: {
      height: string
      url: string
      width: string
    }
  }
}

const RelatedProgramsList = ({ program }: RelatedProgramsListType) => {
  // console.log(program)

  const href = program => (program === 'Profession' ? 'professions' : 'courses')

  const ofType = href(program.type)

  return (
    <div className={stls.relatedProgramsProgram}>
      <div className={stls.imgBox}>
        <Image
          src={program?.heroPicture?.url}
          alt={'alt'}
          className={stls.img}
          // layout='fill'
          width={200}
          height={104}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <p className={stls.programTitle}>{program.title}</p>
      <div className={stls.linkBox}>
      <Link
        href={`${routes.front.professions}/${program.studyFieldSlug}/${program.slug}`}>
        <a className={stls.link}>Узнать больше</a>
      </Link>
      </div>
    </div>
  )
}

export default RelatedProgramsList
