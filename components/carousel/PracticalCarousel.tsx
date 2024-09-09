import { ImgTeacher } from '@/components/imgs'
import Wrapper from '@/components/layout/Wrapper'
import { getImageHeight } from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/carousel/PracticalCarousel.module.sass'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import TagOrange from '../general/TagOrange'
import PracticalSlugCard from '../cards/PracticalSlugCard'
import {card1, card2} from '../../constants/practicalCarousel'

const PracticalCarousel = ({ title, subtitle, cards }) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const isTabletLayout = useBetterMediaQuery(
    '(min-width: 481px) and (max-width: 768px)'
  )
  const isLaptopLayout = useBetterMediaQuery(
    '(min-width: 769px) and (max-width: 1200px)'
  )

  const list = [...cards, card1, card2];
  
  return (
    <section
      className={classNames({
        [stls.container]: true
      })}>
      <Wrapper>
        <div className={stls.heading}>
          <div className={stls.tag}>
            <TagOrange>Практика</TagOrange>
          </div>
          <h2 className={stls.title}>{title}</h2>
          </div>
        <p className={stls.subtitle}>{subtitle}</p>
        <div className={stls.teachers}>
          <Swiper
            slidesPerView={
              isMobileLayout || isTabletLayout ? 1 : isLaptopLayout ? 2 : 3
            }
            spaceBetween={30}
            scrollbar={isMobileLayout || isTabletLayout ? true : false}
            className={stls.mySwiper}>
            {list?.map((card, idx) => (
              <SwiperSlide key={card.title + idx} className={`${stls.slide} ${idx > 0 ? `${stls.disabled}` : ''}`}>
                <PracticalSlugCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalCarousel
