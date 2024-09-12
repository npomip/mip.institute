import stls from '@/styles/components/practicalTraining/PracticalCertificate.module.sass'
import { PracticalDiploma } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import classNames from 'classnames'
import Image from 'next/image'
import PopupTrigger from '../general/PopupTrigger'
import Wrapper from '../layout/Wrapper'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'
import ticket from '@/public/assets/imgs/practicalCarousel/ticket.jpg'
import rocket from '@/public/assets/imgs/practicalCarousel/rocket.png'

type Props = {
  image: PracticalDiploma
}

const PracticalCertificate = ({ image }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical bigLeft fixHeight>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.left]: true
            })}>
            <div className={stls.text}>
              <h2 className={stls.title}>
                <span className={stls.colouredTitle}>
                  Сертификат
                  <br />
                </span>
                после обучения
              </h2>
              <p className={stls.description}>
                Удостоверение о повышении квалификации выдается после освоения
                всех 3-х ступеней
              </p>
            </div>
            <div className={stls.images}>
              <div className={stls.imgTicket}>
                <Image
                  src={ticket}
                  width={ticket.width}
                  height={ticket.height}
                  alt='Сертификат'
                />
              </div>
              <div className={stls.imgCertificate}>
                <Image
                  src={image?.url}
                  width={image?.width}
                  height={image?.height}
                  alt='Удостоверение'
                />
              </div>
            </div>
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.right]: true
            })}>
            <p className={stls.titleRight}>Остались вопросы?</p>
            <p className={stls.descriptionRight}>
              Ответы на вопросы и консультация по обучению
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

export default PracticalCertificate
