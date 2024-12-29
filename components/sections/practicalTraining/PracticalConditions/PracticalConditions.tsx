import classNames from 'classnames'
import stls from './PracticalConditions.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import IconVioletCircle from '@/components/icons/IconVioletCircle'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical/TwoColumnsPractical'
import Wrapper from '@/ui/Wrapper'
import conditions from 'constants/practicalConditions'
import { CldImage } from 'next-cloudinary'

const PracticalConditions = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical bigLeft rightViolet>
          <div className={stls.layout}>
            <h2 className={stls.title}>
              <span className={stls.colouredTitle}>Условия </span>
              участия
              <br />в программе
            </h2>
            <div className={stls.violetLineMobile}></div>
            {conditions.map(({ title, text }) => (
              <div className={stls.leftContent} key={title}>
                <div className={stls.leftColumn}>
                  <p className={stls.titleLeft}>{title}</p>
                </div>

                <div>
                  <div className={stls.row}>
                    <span className={stls.icon}>
                      <IconVioletCircle />
                    </span>
                    <div className={stls.itemText}>{text}</div>
                  </div>
                  <div className={stls.violetLine}></div>
                </div>
              </div>
            ))}
          </div>
          <div className={classNames(stls.layout, stls.right)}>
            <p className={stls.titleRight}>Возникли вопросы?</p>
            <p className={stls.descriptionRight}>
              Оставьте заявку и мы ответим на все ваши вопросы и поможем
              определиться
            </p>
            <div className={stls.imgRight}>
              <CldImage
                src='practical_rocket_a6c0f64e4b'
                width={280}
                height={280}
                alt='Ракета'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className={stls.btn}>
              <PopupTrigger btn='delta' cta='askQuestion' />
            </div>
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default PracticalConditions
