import stls from '@/styles/components/sections/lectorium/LectoriumCertificate.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical'
import ticket from '@/public/assets/imgs/practicalCarousel/ticket.png'
import rocket from '@/public/assets/imgs/practicalCarousel/rocket.png'
import certificate from '@/public/assets/imgs/practicalCarousel/certificate.png'
import Looper from '@/components/icons/Looper'

const LectoriumCertificate = () => {
  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]
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
                КАКОЙ
                <span className={stls.colouredTitle}> ДОКУМЕНТ</span>
                <br />
                ТЫ ПОЛУЧАЕШЬ?
              </h2>
              <p className={stls.description}>
                Всем слушателям будет выдан сертификат об участии
              </p>
            </div>
            <div className={stls.images}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div className={classNameImages[index]} key={index}>
                  <Image
                    src={certificate}
                    width={certificate.width}
                    height={certificate.height}
                    alt='Сертификат'
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={stls.background}>
              <Looper />
            </div>
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.right]: true
            })}>
            <p className={stls.titleRight}>Забронировать место</p>
            <p className={stls.descriptionRight}>
              Нажмите на кнопку ниже <br />и забронируйте место на мероприятии
            </p>
            <div className={stls.imgRight}>
              <Image
                src={rocket}
                width={rocket.width}
                height={rocket.height}
                alt='Ракета'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className={stls.btn}>
              <PopupTrigger btn='zeta' cta='reserve' />
            </div>
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default LectoriumCertificate
