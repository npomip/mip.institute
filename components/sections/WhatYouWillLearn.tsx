import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml } from '@/helpers/index'
import marked from 'marked'
import IconLearnLine from '../icons/IconLearnLine'
import TagOrange from '../general/TagOrange'

const WhatYouWillLearn = ({onMain=false, title}) => {
  const { program } = useContext(ContextStaticProps)
  let list =
    program?.WhatYouWillLearn?.length > 0 &&
    getListItemsInnerHtml(marked(program.WhatYouWillLearn))

  if(onMain){
    list = [['Узнаете о техниках проведения психологической терапии и инструментах, которые применяются в процессе консультации ', 'Поймете, в чем разница работы с ребенком и взрослым, какие есть возрастные психические особенности', 'Определите собственный вектор развития, научитесь находить контакт с самыми разными людьми и откроете новую страницу своей жизни', 'Узнаете, как подбирать терапию индивидуально, в зависимости от проблемы человека', 'Исследуете особенности психики человека', 'Сможете научиться развивать свой бренд']]
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.block}>

        {/* {points} */}
        <h2 className={stls.title}>{title}</h2>
        {onMain && (
        <div className={stls.tag}>
          <TagOrange >
            Знания
          </TagOrange>
        </div> 
        )}
        <ul className={stls.list}>
          {list &&
            list[0].map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <p className={stls.p}>{item}</p>
              </li>
            ))}
        </ul>
        {onMain ? (
          <div className={stls.learnIconMain}>
            <IconLearnLine />
          </div>
        ):(
          <div className={stls.learnIcon}>
            <IconLearnLine />
          </div>)}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
