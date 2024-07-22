import CardTeacher from '@/components/cards/CardTeacher'
import { ImgTeacher } from '@/components/imgs'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/carousel/BachelorCarousel.module.sass'
import { TypeLibTeachers } from '@/types/index'
import classNames from 'classnames'
import { useContext } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import TagOrange from '../general/TagOrange'
import CustomPrevButton from '../general/CustomPrevButton'
import CustomNextButton from '../general/CustomNextButton'
import BachelorSlugCard from '../cards/BachelorSlugCard'
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

// type TeacherProps = {
//   teachersRef?: React.RefObject<HTMLElement | null>
//   teachersFromMain?: TypeLibTeachers
//   title: string
//   onMain?: boolean
//   teachersList?: any[]
// }

const BachelorCarousel = ({
  title,
  subtitle,
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
        <h2 className={stls.title}>{title}</h2>
          {/* <div className={stls.tag}>
            <TagOrange>Опыт</TagOrange>
          </div> */}
        <p className={stls.desc}>
          {subtitle}
        </p>
        <div className={stls.teachers}>
          <Swiper
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            slidesPerView={isMobileAndTabletLayout ? 1 : 2}
            spaceBetween={30}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true
            // }}
            speed={2000}
            scrollbar={isMobileAndTabletLayout ? false : true}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {list?.map((card, idx) => (
              <SwiperSlide key={card.title + idx} className={stls.slide}>
                <BachelorSlugCard
                card={card}
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

export default BachelorCarousel
