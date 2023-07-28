import stls from '@/styles/components/sections/StudyCost.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { BtnEta, BtnGamma, BtnText } from '@/components/btns'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import classNames from 'classnames'
import { IconCircleCheck } from '@/components/icons'
import PopupTrigger from '@/components/general/PopupTrigger'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import MoneySaving from '../program/MoneySaving'

const StudyCost = ({costRef}) => {
  const { program } = useContext(ContextStaticProps)

  const title = program?.title || ''
  const studyHours = program?.studyHours || 0
  const studyForm = program?.studyForm || ''
  const studyFormLabel = program?.studyFormlabel || ''
  const studyMounthsDuration = program?.studyMounthsDuration || 0

  const info = [
    { key: 'Зачисление:', val: <ProgramAdmission /> },
    {
      key: 'Форма обучения:',
      val: studyForm === 'Online' ? 'Дистанционно' : studyFormLabel
    },
    {
      key: 'Срок обучения:',
      val: <ProgramStudyDuration studyMounthsDuration={studyMounthsDuration} />
    },
    {
      key: 'Рассрочка:',
      val: 'От “Тинькофф банка”'
    }
  ]

  const points = [
    'Онлайн вебинары с возможностью просмотра записей в течение всего курса обучения',
    'Тестирование и работа над ошибками после каждой дисциплины',
    'Лекционные и полезные дополнительные материалы к дисциплинам',
    'Индивидуальные и групповые домашние задания с обратной связью от преподавателей',
    'Онлайн-встречи с разбором вопросов от слушателей',
    'Практические упражнения с решением ситуационных задач'
  ]

  return (
    <section ref={costRef} className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <h2 className={stls.title}>
              <span className={stls.laptopdesktop}>
                Запишитесь на программу
              </span>
            </h2>
            <div className={stls.heading}>
              <div className={stls.discountMobile}>
                <h3 className={stls.subtitle}>{title}</h3>
                <div className={stls.discountMobileTag}>
                  <ProgramDiscount small violet />
                </div>
              </div>
              <div className={stls.info}>
                {info.map((item, idx) => (
                  <div key={item.key + idx} className={stls.infoitem}>
                    <p className={stls.infokey}>{item.key}</p>
                    <p className={stls.infoval}>{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={stls.cost}>
              <ProgramCost withPerMonth />
            </div>
            <div className={stls.btns}>
              <div
                className={classNames({
                  [stls.btncta]: true
                })}>
                <PopupTrigger btn='gamma' cta='signUp' />
              </div>
              <div
                className={classNames({
                  [stls.btnquestion]: true
                })}>
                <PopupTrigger btn='zeta' cta='askQuestion' />
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <div className={stls.discount}>
              <ProgramDiscount small violet />
            </div>
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

export default StudyCost
