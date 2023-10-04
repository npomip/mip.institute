import stls from '@/styles/components/sections/TopCourses.module.sass'
import { TypeLibTeachers } from '@/types/index'
import { useContext } from 'react'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import { ContextStaticProps } from '@/context/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import PopupTrigger from '@/components/general/PopupTrigger'
import CardTeacher from '@/components/cards/CardTeacher'
import BtnDelta from '@/components/btns/BtnDelta'
import TagOrange from '../general/TagOrange'
import classNames from 'classnames'
import ImgTopCourse from '../imgs/programs/ImgTopCourse'
import CardTopProgram from '../cards/CardTopProgram'
import routes from '@/config/routes'

type TeacherProps = {
  teachersRef?: React.RefObject<HTMLElement | null>
  teachersFromMain?: TypeLibTeachers
  title: string
  onMain?: boolean
}

const TopCourses = () => {
  const { programs } = useContext(ContextStaticProps)
  // console.log(programs)

  const targetTitles = [
    'Психолог-консультант',
    'Психолог-диетолог. Нутрициолог',
    'Когнитивно-поведенческий психотерапевт',
    'Практический психолог с доп. квалификацией Психолог-психотерапевт',
    'Клиническая психология',
    'Детский психолог',
    'Психосоматика и телесная психотерапия',
    'Гештальт-терапевт'
  ]
  const topCourses = targetTitles.map(title =>
    programs.find(profession => profession.title === title)
  );
  // const topCourses = rearrangeArray(programs, targetTitles)
  console.log(topCourses)

  const list =
    topCourses &&
    [...topCourses]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course.title}
          width={390}
          height={getImageHeight({
            width: 530,
            widthInitial: course?.heroPicture?.width,
            heightInitial: course?.heroPicture?.height
          })}
        />
      )
    }))

    console.log(list)

  const teachersSlides = list?.map((teacher, idx) => (
    <CardTopProgram
      href={`${routes.front.professions}/${teacher.studyFieldSlug}/${teacher.slug}`}
      key={teacher.name + idx}
      portrait={teacher.image}
      title={teacher.title}
      // admissionDate={teacher.specialization}
      studyHours={teacher.studyHours}
    />
  ))
  const mobileSwiperOptions = {
    slidesNum: 1.24,
    spaceBetween: 10
  }

  const tabletSwiperOptions = {
    slidesNum: 3,
    spaceBetween: 20
  }

  const laptopSwiperOptions = {
    slidesNum: 3,
    spaceBetween: 30
  }

  const desktopSwiperOptions = {
    slidesNum: 4,
    spaceBetween: 30
  }

  return (
    <section
      className={classNames({
        [stls.container]: true
        // [stls.onProfessions]: !onMain
      })}>
      <Wrapper>

        <h2 className={stls.title}>Популярные курсы</h2>
        <div className={stls.tag}>
          <TagOrange>ТОП</TagOrange>
        </div>
        <div className={stls.teachers}>
          <SwiperContainer
            topCourses
            slides={teachersSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            desktopOptions={desktopSwiperOptions}
            // alwaysDisabledOnDesktop
            // isMultiRow
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default TopCourses
