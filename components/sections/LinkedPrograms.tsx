import stls from '@/styles/components/sections/LinkedPrograms.module.sass'
import { TypeLibTeachers } from '@/types/index'
import { useContext } from 'react'
import { getImageHeight } from '@/helpers/index'
import { ContextStaticProps } from '@/context/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import TagOrange from '../general/TagOrange'
import classNames from 'classnames'
import ImgTopCourse from '@/components/imgs/programs/ImgTopCourse'
import CardTopProgram from '@/components/cards/CardTopProgram'
import routes from '@/config/routes'
import CardLinkedProgram from '../cards/CardLinkedProgram'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomPrevButton from '../general/CustomPrevButton'
import CustomNextButton from '../general/CustomNextButton'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const LinkedPrograms = ({ programs, title }) => {
  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }

  const list =
    programs &&
    [...programs]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course?.title}
          width={370}
          height={250}
        />
      )
    }))

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const mobileSwiperOptions = {
    slidesNum: 1,
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
        {title}
        {/* <div className={stls.tag}>
          <TagOrange>ТОП</TagOrange>
        </div> */}
        <div className={stls.teachers}>
          <Swiper
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            slidesPerView={isMobileAndTabletLayout ? 1 : 3}
            spaceBetween={30}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true
            // }}
            // speed={2000}
            // autoHeight={true}
            // pagination={{
            //   clickable: true
            // }}
            scrollbar={true}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {list?.map((course, idx) => (
              <SwiperSlide key={course.name + idx} className={stls.slide}>
                <CardLinkedProgram
                  href={`${routes.front.professions}/${course.studyFieldSlug}/${course.slug}`}
                  key={course.name + idx}
                  portrait={course?.image}
                  title={course.title}
                  studyHours={course.studyHours}
                />
              </SwiperSlide>
            ))}
            {!isMobileAndTabletLayout && (
              <>
                <div className='custom-prev-button-container'>
                  <CustomPrevButton
                    showOnMobile
                    left={10}
                    top={-10}
                    mobileTop={-30}
                    mobileLeft={100}
                    teachers
                  />
                </div>
                <div className='custom-next-button-container'>
                  <CustomNextButton
                    showOnMobile
                    left={15}
                    top={-10}
                    mobileTop={-30}
                    mobileLeft={-115}
                    teachers
                  />
                </div>
              </>
            )}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default LinkedPrograms
