import { discountNum } from '@/data/price'
import stls from '@/styles/components/articles/ArticleBlogRelatedPrograms.module.sass'
import styles from '@/styles/pages/JournalSlug.module.sass'
import ProgramDiscountUntil from '../program/ProgramDiscountUntil'
import { ArticleBlogRelatedProgramsType } from './ArticleBlogRelatedPrograms'
import RelatedProgramsList from './RelatedProgramsList'
import ReactMarkdown from 'react-markdown'

const ArticleBlogMoreThenOneProgram = ({
  props
}: ArticleBlogRelatedProgramsType) => {
  const { borderColor } = props
  const { programs } = props

  const customRenderers = {
    em: ({ children }: { children: React.ReactNode }) => (
      <span style={{ color: borderColor }}>{children}</span>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p id={stls.title}>{children}</p>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={styles.strongText}>{children}</span>
    )
  }

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
            <ReactMarkdown key={item.id} components={customRenderers}>
              {item.text}
            </ReactMarkdown>
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
