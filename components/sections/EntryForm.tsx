import { FormAlpha } from '@/components/forms'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/EntryForm.module.sass'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import ImgEntryForm from '../imgs/general/ImgEntryForm'
import TwoColumns from '../layout/TwoColumns'

const EntryForm = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Заявка на поступление</h2>
        <div className={stls.content}>
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
                <ImgEntryForm />
              </div>
            </div>
            <div className={stls.form}>
              <FormAlpha inProfessions promo cta='Записаться' />
            </div>
          </TwoColumns>
          <ImgEntryForm tablet />
          <ImgEntryForm mobile />
        </div>
      </Wrapper>
    </section>
  )
}

export default EntryForm
