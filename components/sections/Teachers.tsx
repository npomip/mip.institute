import stls from '@/styles/components/sections/Teachers.module.sass'
import { useContext } from 'react'
import { getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import PopupTrigger from '@/components/general/PopupTrigger'
import CardTeacher from '@/components/cards/CardTeacher'
import BtnDelta from '@/components/btns/BtnDelta'
import {
  ImgTeacher,
  ImgTeacher1,
  ImgTeacher2,
  ImgTeacher3,
  ImgTeacher4
} from '@/components/imgs'

const Teachers = () => {
  const {
    program: { teachers }
  } = useContext(ProgramContext)

  // console.log(teachers)
  const list = teachers?.map(teacher => {
    teacher.image = (
      <ImgTeacher
        src={teacher?.portrait?.url}
        alt={teacher.name}
        width={160}
        height={getImageHeight({
          width: 160,
          widthInitial: teacher?.portrait?.width,
          heightInitial: teacher?.portrait?.height
        })}
      />
    )
    return teacher
  })

  const teachersSlides = list?.map((teacher, idx) => (
    <CardTeacher
      key={teacher.name + idx}
      portrait={teacher.image}
      name={teacher.name}
      specialization={teacher.specialization}
      achievements={teacher.achievements}
    />
  ))

  const mobileSwiperOptions = {
    slidesNum: 1.75,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 40
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Преподаватели программы</h2>
        <p className={stls.desc}>
          Преподают ведущие практикующие психологи и психоаналитики России{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>
        <div className={stls.teachers}>
          <SwiperContainer
            teachers
            slides={teachersSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            alwaysDisabledOnDesktop
            isMultiRow
          />
        </div>
        <div className={stls.btnContainer}>
          <PopupTrigger btn='delta' cta='learnAboutTeachers' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Teachers
