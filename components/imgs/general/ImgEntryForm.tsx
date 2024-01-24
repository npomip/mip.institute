import stls from '@/styles/components/imgs/general/ImgEntryForm.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/entryForm.svg'
import picTablet from '@/public/assets/imgs/general/entryFormTablet.svg'
import picMobile from '@/public/assets/imgs/general/entryFormMobile.svg'

const ImgEntryForm = ({ mobile = false, tablet = false }) => {
  const id = mobile ? stls.mobile : tablet ? stls.tablet : ''

  const renderImage = () => {
    return mobile ? (
      <Image src={picMobile} alt='hands on main' />
    ) : tablet ? (
      <Image src={picTablet} alt='hands on main' />
    ) : (
      <Image src={pic} alt='hands on main' />
    )
  }

  return (
    <div id={id} className={stls.container}>
      {renderImage()}
    </div>
  )
}

export default ImgEntryForm
