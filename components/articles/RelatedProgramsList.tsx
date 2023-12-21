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

const RelatedProgramsList = ({program} : RelatedProgramsListType) => {
  // console.log(program)

  const href = (program) => program === 'Profession' ? 'professions' : 'courses'

  const ofType = href(program.type)

  // console.log(ofType)
  // const text = props.text;
  // const title = props.title

  // const renderer = new marked.Renderer();
  // renderer.html = (text) => {
  //   return `<div classname=${stls.icon}>${text}</div>`;
  // };
  // renderer.paragraph = (text) => {
  //   return `<p>${text}</p>`
  // }
  // marked.setOptions({ renderer });

  // const icon = marked(props.icon.code);

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
          <Link href={`${routes.front.professions}/${program.studyFieldSlug}/${program.slug}`}>
            <a className={stls.link}>
              Узнать больше
            </a>
          </Link>
        <div className={stls.contentBoxMobile}>
        <p className={stls.programTitle}>{program.title}</p>
          <Link href={`${routes.front.professions}/${program.studyFieldSlug}/${program.slug}`}>
            <a className={stls.link}>
              Узнать больше
            </a>
          </Link>
        </div>
          
      </div>
  )
}

export default RelatedProgramsList