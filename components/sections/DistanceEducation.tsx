import Wrapper from '@/components/layout/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/DistanceEducation.module.sass'
import { useRef, useState } from 'react'
import CardDistanceEducation from '../cards/CardDistanceEducation'
import SwiperContainer from '../general/SwiperContainer'
import { IconFinger } from '../icons'
import { distanceEducationList } from '@/data/general/distanceEducationList'

export const DistanceEducation = ({paddingTop=0, paddingBottom=0, paddingTopMobile=0, paddingBottomMobile=0, list=distanceEducationList}) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const slides = distanceEducationList.map((item, idx) => (
    <CardDistanceEducation
      key={item.text + idx}
      item={item.text}
      purpleBlock={idx % 3 === 1}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 4.7,
    spaceBetween: 15
  }

  const laptopSwiperOptions = {
    slidesNum: 4,
    spaceBetween: 15
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 15
  }

  const mobileSwiperOptions = {
    slidesNum: 1.5,
    spaceBetween: 20
  }

  const fingerRef = useRef(null)

  const [isVisible, setIsVisible] = useState('flex')

  return (
    <section
      ref={fingerRef}
      className={stls.container}
      style={{
        paddingTop: isMobileAndTabletLayout ? paddingTopMobile : paddingTop,
        paddingBottom: isMobileAndTabletLayout
          ? paddingBottomMobile
          : paddingBottom
      }}>
      <Wrapper>
        <h2 className={stls.title}>
          В программу дистанционного обучения входит:
        </h2>
        <SwiperContainer
          slides={slides}
          mobileOptions={mobileSwiperOptions}
          tabletOptions={tabletSwiperOptions}
          laptopOptions={laptopSwiperOptions}
          desktopOptions={desktopSwiperOptions}
          hideNavigation
        />
        <div style={{ display: `${isVisible}` }} className={stls.orangeBlock}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}

export default DistanceEducation
