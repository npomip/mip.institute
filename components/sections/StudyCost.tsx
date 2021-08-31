import stls from '@/styles/components/sections/StudyCost.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { BtnEta, BtnGamma, BtnText } from '@/components/btns'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getCasedRuYearString, getCasedRuMonthString } from '@/helpers/index'
import classNames from 'classnames'
import { IconCircleCheck } from '@/components/icons'

const StudyCost = () => {
  const {
    program: { title, studyHours, studyFormLabel, studyMounthsDuration }
  } = useContext(ProgramContext)

  const info = [
    { key: 'Зачисление:', val: 'каждый месяц' },
    // {
    //   key: 'Количество часов:',
    //   val: `${studyHours} ч`
    // },
    {
      key: 'Форма обучения:',
      val: `${studyFormLabel}`
    },
    {
      key: 'Срок обучения:',
      val: `${getCasedRuYearString(
        studyMounthsDuration
      )} ${getCasedRuMonthString(studyMounthsDuration)}`
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
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.phonetablet}>Стоимость обучения</span>{' '}
          <span className={stls.laptopdesktop}>Запишитесь на программу</span>
        </h2>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.heading}>
              <h3 className={stls.subtitle}>{title}</h3>
              <div className={stls.info}>
                {info.map((item, idx) => (
                  <div key={item.key + idx} className={stls.infoitem}>
                    <p className={stls.infokey}>{item.key}</p>
                    <p className={stls.infoval}>{item.val}</p>
                  </div>
                ))}
              </div>
              <div className={stls.discount}>
                <ProgramDiscount small />
              </div>
            </div>
            <div className={stls.cost}>
              <ProgramCost />
            </div>
            <div className={stls.btns}>
              <div
                className={classNames({
                  [stls.btn]: true,
                  [stls.btncta]: true
                })}>
                <BtnGamma text={'Записаться'} />
              </div>
              <div
                className={classNames({
                  [stls.btn]: true,
                  [stls.btnquestion]: true
                })}>
                <BtnEta text={'Задать вопрос'} />
              </div>
              <div
                className={classNames({
                  [stls.btn]: true,
                  [stls.btnmore]: true
                })}>
                <BtnText text={'Подробнее'} arrowBottom />
              </div>
            </div>
          </div>
          <div className={stls.right}>
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
      </Wrapper>
    </section>
  )
}

export default StudyCost
