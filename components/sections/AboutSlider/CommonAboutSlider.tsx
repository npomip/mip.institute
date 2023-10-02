import stls from '@/styles/components/sections/AboutSlider/CommonAboutSlider.module.sass'
import { useState } from 'react'
import FirstSlide from './FirstSlide'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import pic from '@/public/assets/imgs/general/studyCabinet.png'
import sofa from '@/public/assets/imgs/general/womenOnWhy.png'
import SecondSlide from './SecondSlide'
import ThirdSlide from './ThirdSlide'

const CommonAboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('slide-in')

  const contentData = [
    {
      component: <FirstSlide />,
      imageUrl: pic
    },
    {
      component: <SecondSlide />,
      imageUrl: pic
    },
    {
      component: <ThirdSlide />,
      imageUrl: pic
    }
  ]

  const slideComponents = contentData.map(item => item.component)

  const handleArrowClick = direction => {
    setSlideDirection('slide-out')
    setTimeout(() => {
      if (direction === 'right') {
        setCurrentIndex(prevIndex => (prevIndex + 1) % contentData.length)
      } else if (direction === 'left') {
        setCurrentIndex(prevIndex =>
          prevIndex === 0 ? contentData.length - 1 : prevIndex - 1
        )
      }
      setSlideDirection('slide-in')
    }, 200) // Подождите завершения анимации (время в миллисекундах)
  }
  return (
    <div className={stls.container}>
      <div className={stls.content}>
        <LeftPanel
          currentIndex={currentIndex}
          component={slideComponents}
          onArrowClick={handleArrowClick}
        />
        <RightPanel
          imageUrl={contentData[currentIndex].imageUrl}
          slideDirection={slideDirection}
        />
      </div>
    </div>
  )
}

export default CommonAboutSlider
