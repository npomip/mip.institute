import stls from '@/styles/components/sections/Teachers.module.sass'
import { TypeLibTeachers } from '@/types/index'
import { useContext } from 'react'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import { ContextStaticProps } from '@/context/index'
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
  const { program } = useContext(ContextStaticProps)

  // const teachers: TypeLibTeachers =
  //   sortBasedOnNumericOrder({ teachers: program?.teachers }) || []

  const teachers = program?.teachers

  const teachersSorted: TypeLibTeachers = sortBasedOnNumericOrder({ teachers })

  const list =
    teachersSorted &&
    [...teachersSorted]?.map(teacher => ({
      ...teacher,
      image: (
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
    }))

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
