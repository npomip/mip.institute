import stls from '@/styles/components/sections/StudyCost.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { BtnGamma, BtnText } from '@/components/btns'

const StudyCost = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Стоимость обучения</h2>
        <div className={stls.content}>
          <div className={stls.heading}>
            <h3 className={stls.subtitle}>Нейропсихология детского возраста</h3>
            <div className={stls.discount}>
              <ProgramDiscount small />
            </div>
          </div>
          <div className={stls.cost}>
            <ProgramCost />
          </div>
          <div className={stls.btns}>
            <div className={stls.btn}>
              <BtnGamma text={'Записаться'} />
            </div>
            <div className={stls.btn}>
              <BtnText text={'Подробнее'} arrowBottom />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudyCost
