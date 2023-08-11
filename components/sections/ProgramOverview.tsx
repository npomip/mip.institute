import stls from '@/styles/components/sections/ProgramOverview.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml } from '@/helpers/index'
import marked from 'marked'
import Wrapper from '../layout/Wrapper'
import CloudHead from '../imgs/programs/courses/CloudHead'
import IconBackOfOverview from '../icons/IconBackOfOverview'
import parse from 'html-react-parser'
import { IconCircleCheck } from '../icons'

const ProgramOverview = () => {
  const { program } = useContext(ContextStaticProps)

  const programOverview = program?.programOverview
  const title = program?.programOverviewTitle
  const list =
    program?.programOverview?.length > 0 &&
    getListItemsInnerHtml(marked(programOverview))
    const parseTitle = program?.programOverviewTitle?.length > 0 &&
    title
console.log(parseTitle)
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Описание программы</h2>
        <div className={stls.flexContainer}>

        
        <div className={stls.left}>
          <p>{parseTitle}</p>
        <div className={stls.img}>
          <CloudHead />
        </div>
        <div className={stls.icon}>
          <IconBackOfOverview />
        </div>
        </div>
        <div className={stls.right}>
          {list &&
            list[0].map((item, idx) => (
              <div key={item + idx} className={stls.item}>
                <div className={stls.itemIcon}>
                <IconCircleCheck violetItems />
                </div>
                
                <p className={stls.p}>{parse(item)}</p>
              </div>
            ))}
        </div>
        </div>
        
      </Wrapper>
    </section>
  )
}

export default ProgramOverview
