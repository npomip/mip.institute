import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getListItemsInnerHtml } from '@/helpers/index'

const WhatYouWillLearn = () => {
  const {
    program: { WhatYouWillLearn: whatYouWillLearn }
  } = useContext(ProgramContext)

  const list = getListItemsInnerHtml(whatYouWillLearn)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Чему вы научитесь</h2>
        <ul className={stls.list}>
          {list &&
            list.map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <div className={stls.icon}>
                  <IconCircleCheck calpha />
                </div>
                <p className={stls.p}>{item}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
