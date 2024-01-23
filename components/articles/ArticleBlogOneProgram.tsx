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
//     textItem: {
//       text :string
//     }[]
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

const ArticleBlogOneProgram = ({ props }: ArticleBlogRelatedProgramsType) => {
  // const text = props.text;
  // console.log(props)

  const renderer = new marked.Renderer()
  renderer.em = text => {
    return `<span  style="color: ${props?.borderColor?.code}">${text}</span>`
  }
  renderer.paragraph = text => {
    return `<p id=${stls.title}>${text}</p>`
  }
  marked.setOptions({ renderer })

  const title = marked(props?.title)
  const programs = props?.programs

  return (
    <div
      // style={{border: `1px solid ${props.borderColor.code}`}}
      className={stls.relatedPrograms}>
      <div className={stls.innerBoxOneProgram}>
        <div className={stls.discountBox}>
          <div className={stls.courseWithDiscount}>
            <p className={stls.course}>Курс</p>
            <div className={stls.discountWithDate}>
              <span className={stls.discountNum}>{discount}</span>&nbsp;
              <span id={stls.date}>
                <ProgramDiscountUntil />
              </span>
            </div>
          </div>

          <p className={stls.discount}>{props.programs[0].title}</p>
        </div>
        <div>
          {props.textItem.map(item => (
            <div key={item.id}>{parse(marked(item.text))}</div>
          ))}
        </div>
        <div className={stls.programs}>
          {programs.map(program => (
            <RelatedProgramsList linkOnly program={program} key={program.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogOneProgram
