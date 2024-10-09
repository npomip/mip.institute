import { IconCircleCheck } from '@/components/icons'
import Wrapper from '@/ui/Wrapper'
import ProgramCost from '@/components/program/ProgramCost'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/StudyCost.module.sass'
import { useContext } from 'react'
import { FormAlpha } from '../forms'
import MoneySaving from '../program/MoneySaving'
import points from 'constants/studyCost'

const StudyCost = ({ costRef }) => {
  const { program } = useContext(ContextStaticProps)

  const title = program?.title || ''

  return (
    <section ref={costRef} className={stls.container}>
      <Wrapper>
        <div className={stls.title}>
          <span className={stls.laptopdesktop}>Запишитесь на программу</span>
        </div>
        <div className={stls.upperContainer}>
          <p className={stls.subtitle}>{title}</p>
          <div className={stls.discount}>
            <ProgramDiscount small violet />
          </div>
        </div>

        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.heading}>
              <div className={stls.discountMobile}></div>
            </div>
            <div className={stls.cost}>
              <ProgramCost withPerMonth />
            </div>
          </div>
          <div className={stls.center}>
            <div className={stls.form}>
              <div className={stls.bgForm}>
                <p>Записаться на курс или получить бесплатную консультацию</p>
                <FormAlpha inProfessions cta={'Записаться'} />
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <p className={stls.titleRight}>Что входит в стоимость?</p>
            <ul className={stls.points}>
              {points.map((point, idx) => (
                <li key={point + idx} className={stls.point}>
                  <span className={stls.pointicon}>
                    <IconCircleCheck violetRound />
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

export default StudyCost
