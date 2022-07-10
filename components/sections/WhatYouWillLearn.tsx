import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml } from '@/helpers/index'
import marked from 'marked'

const WhatYouWillLearn = () => {
  const { program } = useContext(ContextStaticProps)

  const list =
    program?.WhatYouWillLearn?.length > 0 &&
    getListItemsInnerHtml(marked(program.WhatYouWillLearn))

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Чему вы научитесь</h2>
        <ul className={stls.list}>
          {list &&
            list[0].map((item, idx) => (
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
