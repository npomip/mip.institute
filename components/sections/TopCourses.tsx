import CardTopProgram from '@/components/cards/CardTopProgram'
import SwiperContainer from '@/components/general/SwiperContainer'
import ImgTopCourse from '@/components/imgs/programs/ImgTopCourse'
import Wrapper from '@/components/layout/Wrapper'
import routes from '@/config/routes'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight } from '@/helpers/index'
import stls from '@/styles/components/sections/TopCourses.module.sass'
import classNames from 'classnames'
import targetTitles from 'constants/topCourses'
import { useContext } from 'react'
import TagOrange from '../general/TagOrange'

const TopCourses = () => {
  const { programs } = useContext(ContextStaticProps)

  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }

  const topCourses = targetTitles.map(title =>
    programs.find(profession => profession.title === title)
  )

  const list =
    programs &&
    [...topCourses]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course?.title}
          width={course?.heroPicture?.width}
          height={course?.heroPicture?.height}
        />
      )
    }))

  const topCoursesSlides =
    list[0]?.title &&
    list.map((course, idx) => (
      <CardTopProgram
        href={`${routes.front.professions}/${course.studyFieldSlug}/${course.slug}`}
        key={course.name + idx}
        portrait={course?.image}
        title={course.title}
        studyHours={course.studyHours}
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
        <div className={stls.heading}>
          <div className={stls.tag}>
            <TagOrange>ТОП</TagOrange>
          </div>
          <h2 className={stls.title}>Популярные курсы</h2>
        </div>
        <div className={stls.teachers}>
          <SwiperContainer
            autoHeight
            topCourses
            slides={topCoursesSlides}
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
