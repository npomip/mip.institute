import stls from './WhichDocument.module.sass'
import Image from 'next/image'
import certificate from '@/public/assets/imgs/groupSupervision/Certificates/groupSupervisionCertificate.png'
import vector from '@/public/assets/imgs/groupSupervision/Certificates/Vector.png'
import vectorMob from '@/public/assets/imgs/groupSupervision/Certificates/VectorMob.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { CldImage } from 'next-cloudinary';


// "use client";

// // By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
// export default function Page() {
//   return (
//     <CldImage
//       src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
//       width="500" // Transform the image: auto-crop to square aspect_ratio
//       height="500"
//       crop={{
//         type: 'auto',
//         source: true
//       }}
//     />
//   );
// }

const WhichDocument = () => {
  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const position = isMobileAndTabletLayout ? '172% 78%' : '-87% 24%'
  const background = isMobileAndTabletLayout ? vectorMob : vector
  return (
    <section>
      <div
        className={stls.container}
        style={{
          backgroundImage: `url(${background.src})`,
          objectFit: 'cover',
          backgroundSize: `${isMobileAndTabletLayout ? '600px' : '700px'}`,
          backgroundPosition: position,
          backgroundRepeat: 'no-repeat'
        }}>
        <div className={stls.left}>
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
                // <Image
                //   src={'https://res.cloudinary.com/mipinstitute/image/upload/v1733487278/sertifikat_krupnyj_razmer_a3c2a205c5.jpg'}
                //   width={certificate.width}
                //   height={certificate.height}
                //   alt='Сертификат'
                //   className={stls.certificate}
                //   style={{
                //     width: '100%',
                //     height: 'auto'
                //   }}
                // />
                <CldImage
                alt='Сертификат'
      src="sertifikat_krupnyj_razmer_a3c2a205c5" // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      className={stls.certificate}
      style={{
            width: '100%',
            height: 'auto'
          }}
      crop={{
        type: 'fit',
        source: true
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
