import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/DistanceEducation.module.sass'
import CardDistanceEducation from '../cards/CardDistanceEducation'
import SwiperContainer from '../general/SwiperContainer'
import classNames from 'classnames'
import { IconFinger } from '../icons'

const list = [
  'Смотрите лекции, проходите тесты на платформе',
  'Профессиональное сообщество одногруппников, выпускников и практиков',
  'Демонстрационные сессии, разборы реальных клиентских случаев, интервизии и супервизии',
  'Индивидуальные домашние задания, групповые проекты с обратной связью от преподавателей',
  'Практические занятия в парах и тройках для развития навыков на практике',
  'Доступ к вебинарам по всем направлениям для расширения профессионального кругозора',
  'На выпуске подготовка к итоговой аттестации при личной поддержке практикующего психолога'
]

export const DistanceEducation = () => {
  const slides = list.map((item, idx) => (
    <CardDistanceEducation
      key={item + idx}
      item={item}
      purpleBlock={idx === 1 || idx === 4}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 5,
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

  return (
    <section className={stls.container}>
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
        <div className={stls.orangeBlock}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}
