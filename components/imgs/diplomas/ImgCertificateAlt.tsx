import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/certificate-alt.jpg'

const ImgCertificateAlt = ({ width = 0, height = 0 }) => {
  return (
    <span>
      <Image
        src={pic}
        alt='Удостоверение'
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </span>
  )
}

export default ImgCertificateAlt
