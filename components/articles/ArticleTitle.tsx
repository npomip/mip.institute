import stls from '@/styles/components/articles/ArticleTitle.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse, { domToReact, attributesToProps } from 'html-react-parser'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'

type ArticleTitleType = {
  props: {
    color: string
    title?: string
    studyField?: string
    picture: {
      url: string
      width: string
      height: string
    }
    teacher: {
      name: string
      achievements: string
      portrait: {
        url: string
        width: string
        height: string
      }
    }
  }
}

const ArticleTitle = ({ props }: ArticleTitleType) => {
  console.log(props)
  // const renderer = new marked.Renderer();
  // renderer.paragraph = (text) => {
  //   return `<h2>${text}</h2>`;
  // };

  // renderer.em = (text) => {
  //   return `<span style="color: ${props?.color?.code}">${text}</span>`;
  // };
  // marked.setOptions({ renderer });

  // const h2text = marked(props?.subtitle);

  return (
    <>
      <span style={{color: props.color, border: `1px solid ${props.color}`}} className={stls.tag}>{props.studyField}</span>
      <div className={stls.authors}>
        <p><strong>Автор:</strong></p>
        <p><strong>Психолог:</strong> {props.teacher.name}</p>
      </div>
      
      <h1 className={stls.articleTitle}>{props.title}</h1>
      <div className={stls.imgBox}>
        <div className={stls.imgTitleContainer}>
          <Image
            src={props?.picture?.url}
            alt={'alt'}
            className={stls.imgTitle}
            // layout='fill'
            width={750}
            height={430}
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>
        <div className={stls.imgTeacherWithAchievements}>
          <div className={stls.imgTeacherContainer}>
            <Image
              src={props.teacher.portrait.url}
              alt={'alt'}
              // style={{top: '20px'}}
              className={stls.imgTeacher}
              // layout='fill'
              width={227}
              height={292}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
          <div className={stls.teacherText}>
            <p className={stls.teacherName}>{props.teacher.name}</p>
            <p className={stls.achievements}>{props.teacher.achievements}</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ArticleTitle
