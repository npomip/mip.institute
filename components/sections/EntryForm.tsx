import { FormAlpha } from '@/components/forms'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/EntryForm.module.sass'
import IconGratefullPortal from '@/components/icons/IconGratefullPortal'
import Horn from '@/components/imgs/general/Horn'
import ImgEntryForm from '@/components/imgs/general/ImgEntryForm'
import TwoColumns from '@/components/layout/TwoColumns'
import classNames from 'classnames'
import picHorn from '@/public/assets/imgs/general/horn.png'
import picHorn_liveCourses from '@/public/assets/imgs/general/horn_liveCourse.png'

interface Props {
  isLiveCourse?: boolean
}

const EntryForm = ({ isLiveCourse = false }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Заявка на поступление</h2>
        <div
          className={classNames({
            [stls.content]: true,
            [stls.liveCourse]: isLiveCourse
          })}>
          <div className={stls.smallOne}>
            <IconGratefullPortal xsmall />
          </div>
          <div className={stls.smallTwo}>
            <IconGratefullPortal xsmall />
          </div>
          <div className={stls.smallThree}>
            <IconGratefullPortal tenPx />
          </div>
          <div className={stls.medium}>
            <IconGratefullPortal thirtyPx />
          </div>
          <div className={stls.mediumTwo}>
            <IconGratefullPortal thirtyPx />
          </div>
          <div className={stls.big}>
            <IconGratefullPortal fiftyPx />
          </div>
          <TwoColumns>
            <div className={stls.imgContainer}>
              <div id={stls.entryText}>
                <div id={stls.header}>Подберем программу под ваш запрос</div>
                <div id={stls.description}>
                  Остались вопросы или не можете определиться с курсом? Оставьте
                  свои контакты, сотрудник приёмной комиссии с вами свяжется и
                  проконсультирует
                </div>
                <ImgEntryForm isLiveCourse={isLiveCourse} />
              </div>
            </div>
            <div className={stls.form}>
              <FormAlpha
                inProfessions
                promo
                cta='Записаться'
                isLiveCourse={isLiveCourse}
              />
            </div>
            <Horn url={isLiveCourse ? picHorn_liveCourses : picHorn} />
          </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default EntryForm
