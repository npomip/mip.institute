import stls from '@/styles/components/sections/ForWhom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  IconGettingup,
  IconRemoteWork,
  IconToTheMoon
} from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getListItemsInnerHtml } from '@/helpers/index'

const ForWhom = () => {
  const {
    program: { ForWhom: forWhom }
  } = useContext(ProgramContext)

  const list = getListItemsInnerHtml(forWhom)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Для кого программа</h2>
        <p className={stls.subtitle}>
          Программа точно подойдет тем, кто хочет:
        </p>
        <ul className={stls.list}>
          {list &&
            list[0].map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <div className={stls.icon}>
                  {idx === 0 ? (
                    <IconToTheMoon />
                  ) : idx === 1 ? (
                    <IconRemoteWork />
                  ) : (
                    <IconGettingup />
                  )}
                </div>
                <p className={stls.p}>{item}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default ForWhom
