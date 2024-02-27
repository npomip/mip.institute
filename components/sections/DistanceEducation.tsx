import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/DistanceEducation.module.sass'
import IconPortalViolet from '../icons/IconPortalViolet'
import SwiperContainer from '../general/SwiperContainer'

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

  const teachersSlides = list?.map((teacher, idx) => (
    <CardTeacher
      key={teacher.name + idx}
      portrait={teacher.image}
      name={teacher.name}
      specialization={teacher.specialization}
      achievements={teacher.achievements}
    />
  ))
  const mobileSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 40
  }

  const laptopSwiperOptions = {
    slidesNum: 1.5,
    spaceBetween: 30
  }

  const desktopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 30
  }
  
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          В программу дистанционного обучения входит:
        </h2>
        <SwiperContainer
          // teachers
          slides={teachersSlides}
          mobileOptions={mobileSwiperOptions}
          tabletOptions={tabletSwiperOptions}
          laptopOptions={laptopSwiperOptions}
          desktopOptions={desktopSwiperOptions}
          // alwaysDisabledOnDesktop
          // isMultiRow
        />
        {/* <ul className={stls.list}>
          {list.map((item, idx) => (
            <li key={item + idx} className={stls.item}>
              <IconPortalViolet />
              <div className={stls.description}>
                <span className={stls.p}>{item}</span>
              </div>
            </li>
          ))}
        </ul> */}
      </Wrapper>
    </section>
  )
}
