import CardTeacher from '@/components/cards/CardTeacher'
import { ImgTeacher } from '@/components/imgs'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/Teachers.module.sass'
import { TypeLibTeachers } from '@/types/index'
import classNames from 'classnames'
import { useContext } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import TagOrange from '../general/TagOrange'
import CustomPrevButton from '../general/CustomPrevButton'
import CustomNextButton from '../general/CustomNextButton'
// import 'swiper/css/scrollbar'
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

type TeacherProps = {
  teachersRef?: React.RefObject<HTMLElement | null>
  teachersFromMain?: TypeLibTeachers
  title: string
  onMain?: boolean
  teachersList?: any[]
}

const Teachers = ({
  teachersRef,
  teachersFromMain,
  title,
  onMain = false,
  teachersList=[]
}: TeacherProps) => {
  const { program, curProgramsType } = useContext(ContextStaticProps)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  let teachers = program?.teachers
  if (teachersFromMain) {
    teachers = teachersFromMain
  }
  if(teachersList) {
    teachers = teachersList
  }

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

  return (
    <section
      ref={teachersRef}
      className={classNames({
        [stls.container]: true,
        [stls.onProfessions]: !onMain,
        [stls.course]: curProgramsType === 'course'
      })}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        {onMain && (
          <div className={stls.tag}>
            <TagOrange>Опыт</TagOrange>
          </div>
        )}
        <p className={stls.desc}>
          Преподают ведущие практикующие психологи и психотерапевты России{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>
        <div className={stls.teachers}>
          <Swiper
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            slidesPerView={isMobileAndTabletLayout ? 1 : 2}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={2000}
            // autoHeight={true}
            // pagination={{
            //   clickable: true
            // }}
            scrollbar={isMobileAndTabletLayout ? false : true}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {list?.map((teacher, idx) => (
              <SwiperSlide key={teacher.name + idx} className={stls.slide}>
                <CardTeacher
                  portrait={teacher.image}
                  name={teacher.name}
                  achievements={teacher.achievements}
                  experience={teacher.experience}
                />
              </SwiperSlide>
            ))}

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
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default Teachers
