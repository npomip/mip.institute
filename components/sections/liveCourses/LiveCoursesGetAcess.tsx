import src from '@/public/assets/imgs/liveCourses/liveCourseGetAcess.jpg'
import stls from '@/styles/components/sections/liveCourses/LiveCoursesGetAcess.module.sass'
import Image from 'next/image'
import Wrapper from '@/components/layout/Wrapper'

type Props = {
  marginBottom: number
  openModal: () => void
}

const LiveCoursesGetAcess = ({ marginBottom, openModal }: Props) => {
  return (
    <Wrapper>
      <div className={stls.container} style={{ marginBottom: marginBottom }}>
        <div className={stls.image}>
          <Image src={src} alt='Получи доступ к курсу' />
        </div>
        <div className={stls.text}>
          <div className={stls.title}>
            Получи доступ <br />к курсу
          </div>
        </div>
        <button className={stls.buttonBlock} onClick={openModal}>
          Разобраться с обидами
        </button>
      </div>
    </Wrapper>
  )
}

export default LiveCoursesGetAcess
