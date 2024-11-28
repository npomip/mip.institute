import stls from './WhichDocument.module.sass'
import Image from 'next/image'
import certificate from '@/public/assets/imgs/groupSupervision/Certificates/groupSupervisionCertificate.png'
import vector from '@/public/assets/imgs/groupSupervision/Certificates/Vector.png'

const WhichDocument = () => {
  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]

  return (
    <section>
      <div className={stls.container}>
        <div
          className={stls.left}
          style={{
            backgroundImage: `url(${vector.src})`,
            objectFit: 'cover',
            backgroundSize: '350px',
            backgroundRepeat: 'no-repeat'
          }}>
          <h2 className={stls.title}>
            Какой&nbsp;
            <span className={stls.coloredTitle}>документ </span>
            вы получаете?
          </h2>
          <p className={stls.text}>
            <span className={stls.bold}>Сертификат о прохождении</span>
            супервизии с указанием количества пройденных часов
          </p>
        </div>

        <div className={stls.right}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={classNameImages[index]} key={index}>
              {index === 0 && (
                <Image
                  src={certificate}
                  width={certificate.width}
                  height={certificate.height}
                  alt='Сертификат'
                  className={stls.certificate}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhichDocument
