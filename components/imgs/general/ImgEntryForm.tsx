import stls from '@/styles/components/imgs/general/ImgEntryForm.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/entryForm.svg'
import picLiveCourses from '@/public/assets/imgs/general/entryForm_liveCourse.svg'

interface Props {
  isLiveCourse?: boolean
}

const ImgEntryForm = ({ isLiveCourse }: Props) => {
  return (
    <div className={stls.container}>
      <Image src={isLiveCourse ? picLiveCourses : pic} alt='Трубит горн' />
    </div>
  )
}

export default ImgEntryForm
