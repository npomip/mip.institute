import CardTeacher from '@/components/cards/CardTeacher'
import { ImgTeacher } from '@/components/imgs'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/carousel/Carousel.module.sass'
import { TypeLibTeachers } from '@/types/index'
import classNames from 'classnames'
import { useContext } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import TagOrange from '../general/TagOrange'
import CustomPrevButton from '../general/CustomPrevButton'
import CustomNextButton from '../general/CustomNextButton'
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

// type TeacherProps = {
//   teachersRef?: React.RefObject<HTMLElement | null>
//   teachersFromMain?: TypeLibTeachers
//   title: string
//   onMain?: boolean
//   teachersList?: any[]
// }

const Carousel = ({
  cards,
  card
}) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')


  const list =
    cards.map(teacher => ({
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
      className={classNames({
        [stls.container]: true,
      })}>
      <Wrapper>
        <div className={stls.carousel}>
          <Swiper

            slidesPerView={isMobileAndTabletLayout ? 1 : 2}
            spaceBetween={30}
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
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default Carousel
