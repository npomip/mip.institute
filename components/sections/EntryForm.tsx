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
import IconGeopoint from '../icons/IconGeopoint'

interface Props {
  isLiveCourse?: boolean
  withPromo?: boolean
  onBachelor?: boolean
}

const EntryForm = ({
  isLiveCourse = false,
  withPromo = true,
  onBachelor = false
}: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          {onBachelor ? 'Как поступить' : 'Заявка на поступление'}
        </h2>
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
                {onBachelor ? (
                  <>
                    <p className={stls.comissionTitle}>
                      Позвонить <br />в приемную комиссию
                    </p>
                    <div className={stls.withIcon}>
                      <IconGeopoint />
                      <p className={stls.subtitle}>Приемная комиссия:</p>
                    </div>

                    <a href='tel:+7-499-388-92-34'>+7 (499) 388-92-34</a>
                    <a href='tel:+7-800-600-85-57'>+7 (800) 600-85-57</a>
                  </>
                ) : (
                  <>
                    <div id={stls.header}>
                      Подберем программу под ваш запрос
                    </div>
                    <div id={stls.description}>
                      Остались вопросы или не можете определиться с курсом?
                      Оставьте свои контакты, сотрудник приёмной комиссии с вами
                      свяжется и проконсультирует
                    </div>
                  </>
                )}

                <ImgEntryForm isLiveCourse={isLiveCourse} />
              </div>
            </div>
            <div className={classNames({
            [stls.form]: true,
            [stls.bachelorForm]: onBachelor,
          })}>
              <p>
                {onBachelor && (
                  <>
                    Оставить заявку <br /> на онлайн – поступление
                  </>
                )}
              </p>
              <FormAlpha
                inProfessions
                promo={withPromo}
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
