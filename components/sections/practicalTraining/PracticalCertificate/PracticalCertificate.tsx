import stls from './PracticalCertificate.module.sass'
import classNames from 'classnames'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical/TwoColumnsPractical'
import { CldImage } from 'next-cloudinary'

const PracticalCertificate = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical bigLeft fixHeight>
          <div className={classNames(stls.layout, stls.left)}>
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
                <CldImage
                  src='practical_certificate1_ad6c732968'
                  width={380}
                  height={270}
                  alt='Сертификат'
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className={stls.imgCertificate}>
                <CldImage
                  src='practical_certificate_7ae17dc1b7'
                  width={340}
                  height={240}
                  alt='Удостоверение'
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className={classNames(stls.layout, stls.right)}>
            <p className={stls.titleRight}>Остались вопросы?</p>
            <p className={stls.descriptionRight}>
              Ответы на вопросы и консультация по обучению
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

export default PracticalCertificate
