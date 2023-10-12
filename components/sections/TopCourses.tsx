import stls from '@/styles/components/sections/TopCourses.module.sass'
import { TypeLibTeachers } from '@/types/index'
import { useContext } from 'react'
import { getImageHeight } from '@/helpers/index'
import { ContextStaticProps } from '@/context/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
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

  if (!programs || !programs.length) {
    return null; // Если нет данных, не рендерим ничего
  }

  const targetTitles = [
    'Психолог-консультант',
    'Когнитивно-поведенческий психотерапевт',
    'Психолог-диетолог. Нутрициолог',
    'Гештальт-терапевт',
    'Практический психолог с доп. квалификацией Психолог-психотерапевт',
    'Клиническая психология',
    'Детский психолог',
    'Психосоматика и телесная психотерапия',
  ]
  const topCourses = targetTitles.map(title =>
    programs.find(profession => profession.title === title)
  );

  const list =
  programs &&
    [...topCourses]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course?.title}
          width={390}
          height={getImageHeight({
            width: 530,
            widthInitial: course?.heroPicture?.width,
            heightInitial: course?.heroPicture?.height
          })}
        />
      )
    }))

  const teachersSlides = list[0]?.title && list.map((teacher, idx) => (
    <CardTopProgram
      href={`${routes.front.professions}/${teacher.studyFieldSlug}/${teacher.slug}`}
      key={teacher.name + idx}
      portrait={teacher?.image}
      title={teacher.title}
      studyHours={teacher.studyHours}
    />
  ))
  const mobileSwiperOptions = {
    slidesNum: 2,
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
            autoHeight
            topCourses
            slides={teachersSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            desktopOptions={desktopSwiperOptions}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default TopCourses
