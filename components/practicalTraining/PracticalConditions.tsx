import rocket from '@/public/assets/imgs/practicalCarousel/rocket.png'
import classNames from 'classnames'
import Image from 'next/image'
import stls from 'styles/components/practicalTraining/PracticalConditions.module.sass'
import PopupTrigger from '../general/PopupTrigger'
import IconVioletCircle from '../icons/IconVioletCircle'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'
import Wrapper from '../layout/Wrapper'
import conditions from 'constants/practicalConditions'

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
              <Image
                src={rocket}
                width={rocket.width}
                height={rocket.height}
                alt='Ракета'
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
