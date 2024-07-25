import stls from '@/styles/components/sections/BachelorStudyCost.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { IconCircleCheck } from '@/components/icons'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import MoneySaving from '../program/MoneySaving'
import { FormAlpha } from '../forms'
import getNextWednesday from '@/helpers/getNextThursday'
import BachelorProgramCost from '../program/BachelorProgramCost'

const BachelorStudyCost = ({ costRef }) => {
  const { program, bachelor } = useContext(ContextStaticProps)

  console.log(bachelor)

  const points = [
    'Обучающимся по двум программам высшего образования – 15%',
    'Поступающим с высокими результатами ЕГЭ (от 230 баллов) – 20%.',
    'Обучающимся из многодетных семей – 20%',
    'Детям-инвалидам, инвалидам с детства, инвалидам I и II групп – 20%',
    'Ветеранам боевых действий и участникам СВО – 20% ',
    'Детям участников СВО – 15%'
  ]

  return (
    <section ref={costRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Оплата обучения и скидки </h2>

        <div className={stls.content}>
          <div className={stls.left}>
            <BachelorProgramCost
              fullPrice={bachelor?.onlineFullPrice}
              priceWithDiscount={bachelor?.onlinePriceWithDiscount}
              violetBtn
              bg='#D3C7FF'
              tagColor='#6F01C6'
              title={
                <>
                  Обучение с применением дистанционных <br /> технологий
                </>
              }
              crossLineColor='#6F01C6'
            />
          </div>
          <div className={stls.center}>
            <BachelorProgramCost
              fullPrice={bachelor?.offlineFullPrice}
              priceWithDiscount={bachelor?.offlinePriceWithDiscount}
              orangeBtn
              bg='#FEA965'
              tagColor='#FFF'
              title={
                <>
                  Обучение в смешанном формате (группа <br /> выходного дня)
                </>
              }
              crossLineColor='#FFF'
            />
          </div>
          <div className={stls.right}>
            <p className={stls.titleRight}>
              МИП предоставляет скидки на обучение:
            </p>
            <ul className={stls.points}>
              {points.map((point, idx) => (
                <li key={point + idx} className={stls.point}>
                  <span className={stls.pointicon}>
                    <IconCircleCheck inverse />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MoneySaving />
      </Wrapper>
    </section>
  )
}

export default BachelorStudyCost
