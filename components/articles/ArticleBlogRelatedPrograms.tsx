import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import RelatedProgramsList from './RelatedProgramsList'

type ArticleBlogRelatedProgramsType = {
  props: {
      title: string
      borderColor?: {
        code?: string 
      }
      programs: {
        id: string
        type: string
        slug: string
        studyFieldSlug: string
        title: string
        heroPicture: {
          height: string
          url: string
          width: string
        }
      }[]
  }
  
}

const ArticleBlogRelatedPrograms = ({props} : ArticleBlogRelatedProgramsType) => {
  // const text = props.text;
  // console.log(props)
  

  const renderer = new marked.Renderer();
  renderer.em = (text) => {
    return `<span  style="color: ${props?.borderColor?.code}">${text}</span>`;
  };
  renderer.paragraph = (text) => {
    return `<p className=${stls.title}>${text}</p>`
  }
  marked.setOptions({ renderer });

  const title = marked(props?.title)
  const programs = props?.programs

  return (
      <div style={{border: `1px solid ${props.borderColor.code}`}} className={stls.relatedPrograms}>
        <div className={stls.innerBox}>
          <div className={stls.relatedProgramsTitle}>
            {parse(title)}
          </div>
          
          <div className={stls.programs}>
            {programs.map((program) => (
              <RelatedProgramsList program={program} key={program.id} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default ArticleBlogRelatedPrograms