import { IconCircleCheck } from '@/components/icons'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/BachelorStudyCost.module.sass'
import points from 'constants/bachelorStudyCost'
import { MutableRefObject, useContext } from 'react'
import BachelorProgramCost from '../program/BachelorProgramCost'
import MoneySaving from '../program/MoneySaving'

type Props = {
  costRef: MutableRefObject<any>
}

const BachelorStudyCost = ({ costRef }: Props) => {
  const { bachelor } = useContext(ContextStaticProps)

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
