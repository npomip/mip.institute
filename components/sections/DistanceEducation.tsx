import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/DistanceEducation.module.sass'
import CardDistanceEducation from '../cards/CardDistanceEducation'
import SwiperContainer from '../general/SwiperContainer'
import classNames from 'classnames'
import { IconFinger } from '../icons'
import { useEffect, useRef, useState } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const list = [
  'Смотрите лекции, проходите тесты на платформе',
  'Профессиональное сообщество одногруппников, выпускников и практиков',
  'Демонстрационные сессии, разборы реальных клиентских случаев, интервизии и супервизии',
  'Индивидуальные домашние задания, групповые проекты с обратной связью от преподавателей',
  'Практические занятия в парах и тройках для развития навыков на практике',
  'Доступ к вебинарам по всем направлениям для расширения профессионального кругозора',
  'На выпуске подготовка к итоговой аттестации при личной поддержке практикующего психолога'
]

export const DistanceEducation = ({paddingTop=0, paddingBottom=0, paddingTopMobile=0, paddingBottomMobile=0}) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const slides = list.map((item, idx) => (
    <CardDistanceEducation
      key={item + idx}
      item={item}
      purpleBlock={idx === 1 || idx === 4}
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

  const [isIntersecting, setIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState('flex')

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) =>
  //     setIntersecting(entry.isIntersecting)
  //   );

  //   observer.observe(fingerRef.current);
  //   return () => {
  //     observer.disconnect();
  //   };

  // }, [fingerRef]);


  // useEffect(() => {
  //   if(isIntersecting){
  //     setTimeout(() => {
  //       setIsVisible('none')
  //     }, 15000);
  //   } else {
  //     setIsVisible('flex')
  //   }
    
    
  // }, [isIntersecting])

  // console.log('ВИЖУ ПАЛЕЦ', isIntersecting)

  return (
    <section ref={fingerRef} className={stls.container} style={{ 
      paddingTop : isMobileAndTabletLayout ? paddingTopMobile : paddingTop, 
      paddingBottom : isMobileAndTabletLayout ? paddingBottomMobile : paddingBottom
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
        <div style={{display: `${isVisible}`}}  className={stls.orangeBlock}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}

export default DistanceEducation