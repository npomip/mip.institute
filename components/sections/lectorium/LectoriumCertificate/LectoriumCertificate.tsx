import stls from './LectoriumCertificate.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical/TwoColumnsPractical'
import Looper from '@/components/icons/Looper'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const LectoriumCertificate = ({ diploma, href }) => {
  
  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical bigLeft fixHeight>
          <div className={classNames(stls.layout, stls.left)}>
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
                    src={diploma?.url}
                    width={diploma?.width}
                    height={diploma?.height}
                    alt='Сертификат'
                    className={stls.diploma}
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
          <div className={classNames(stls.layout, stls.right)}>
            <p className={stls.titleRight}>Забронировать место</p>
            <p className={stls.descriptionRight}>
              Нажмите на кнопку ниже <br />и забронируйте место на мероприятии
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
            <Link href={href}  passHref legacyBehavior>
            <a target="_blank" className={stls.btn}>
            Забронировать

            </a>
            </Link >
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default LectoriumCertificate
