import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import RelatedProgramsList from './RelatedProgramsList'
import { discount, discountNum } from '@/data/price'
import ProgramDiscountUntil from '../program/ProgramDiscountUntil'
import { ArticleBlogRelatedProgramsType } from './ArticleBlogRelatedPrograms'

// type ArticleBlogRelatedProgramsType = {
//   props: {
//     title: string
//     borderColor?: {
//       code?: string
//     }
//     programs: {
//       id: string
//       type: string
//       slug: string
//       studyFieldSlug: string
//       title: string
//       heroPicture: {
//         height: string
//         url: string
//         width: string
//       }
//     }[]
//   }
// }

const ArticleBlogMoreThenOneProgram = ({
  props
}: ArticleBlogRelatedProgramsType) => {
  const renderer = new marked.Renderer()
  renderer.em = text => {
    return `<span style="color: ${props?.borderColor?.code}">${text}</span>`
  }
  renderer.paragraph = text => {
    return `<p id=${stls.title}>${text}</p>`
  }
  marked.setOptions({ renderer })

  // const title = marked(props?.textItem)
  const programs = props?.programs

  return (
    <div className={stls.relatedPrograms}>
      <div className={stls.innerBox}>
        <div className={stls.discountBox}>
          <p className={stls.discount}>
            Обучение в МИП со скидкой&nbsp;
            <span className={stls.discountNum}>{discountNum}%</span>
            <span className={stls.mobileOnly}>
              <br />*
            </span>
            &nbsp;
            <span className={stls.discountUntil}>
              <ProgramDiscountUntil />
            </span>
          </p>
        </div>

        <div>
          {props.textItem.map(item => (
            <div key={item.id}>
              {parse(marked(item.text))}
            </div>
          ))}
        </div>
        <p id={stls.courses}>Курсы:</p>
        <div className={stls.programs}>
          {programs.map(program => (
            <RelatedProgramsList program={program} key={program.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogMoreThenOneProgram
