import Wrapper from '@/components/layout/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/practicalTraining/PracticalProgramDescription.module.sass'
import classNames from 'classnames'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import TagOrange from '../general/TagOrange'
import { ProgramDescription, DescriptionCardItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Image from 'next/image'
import PracticalNextButton from '../general/PracticalNextButton'
import PracticalPrevButton from '../general/PracticalPrevButton'
import { useState } from 'react'
import { IconFinger } from '../icons'
import parse from 'html-react-parser'
import marked from 'marked'
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

type Props = {
  description: ProgramDescription
  cards: DescriptionCardItem[]
}

const PracticalProgramDescription = ({ description, cards}: Props) => {
  const [title, setTitle] = useState("Описание программы");
  const [showDescription, setShowDescription] = useState(true);
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    if (activeIndex === 0) {
      setTitle("Описание программы");
      setShowDescription(true);
    } else if (activeIndex === 0 || activeIndex === 1){
      setTitle("Описание программы");
      setShowDescription(true);
    } else {
      setTitle("Программа включает в себя:");
      setShowDescription(false);
    }
  };
  const renderer = new marked.Renderer()
  renderer.em = text => {
    return `<span class=${stls.strongText} style="color: ${description.subtitleColor}">${text}</span>`
  }

  renderer.strong = text => {
    return `<span class=${stls.strongText}>${text}</span>`
  }
  marked.setOptions({ renderer })
  return (
    <section
      className={classNames({
        [stls.container]: true,
      })}>
      <Wrapper>
        <div className={stls.top}>
            <div className={stls.tag}>
              <TagOrange>Практика</TagOrange>
            </div>
            <h2 className={stls.title}>{title}</h2>
            {showDescription && ( <div className={stls.desc}>
              {parse(marked(description.title))}
            </div>
            )}
        </div>
        <div className={stls.cards}>
          <Swiper
            onSlideChange={handleSlideChange}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            slidesPerView={isMobileAndTabletLayout ? 1 : 2}
            spaceBetween={30}
            slidesPerGroup={isMobileAndTabletLayout? 1 : 2}
            className={stls.mySwiper}>
            {cards?.map((description, idx) => (
              <SwiperSlide key={description.title + idx} className={stls.slide}>
                <div className={stls.cardContainer}>
                  <div className={stls.cardInnerContainer}>
                    <div className={stls.textBlock}>
                      <h2 className={stls.cardTitle}>{description.title}</h2>
                      <p className={stls.cardSubtitle}>{description.subtitle}</p>
                    </div>
                    <div className={stls.imageBlock}>
                      <Image className={stls.cardImage} src={description.picture?.url} width={description.picture?.width} height={description.picture?.height} alt={stls.cardTitle}/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
            <div className='custom-prev-button-container'>
              <PracticalPrevButton
                programPrevButton
                left={-1130}
                top={175}
                mobileTop={-195}
                mobileLeft={-509}
              />
            </div>
            <div className='custom-next-button-container'>
              <PracticalNextButton
                programNextButton
                left={41}
                top={175}
                mobileTop={-195}
                mobileLeft={50}
              />
            </div>
            {isMobileAndTabletLayout && <div style={{ display: 'flex' }} className={stls.orangeBlock}>
              <IconFinger />
            </div>}
        </div>
        <div className={stls.bottom}>
          <div className={stls.desc}>{parse(marked(description.subtitle))}</div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalProgramDescription
