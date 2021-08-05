import stls from '@/styles/components/sections/Teachers.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardTeacher from '@/components/cards/CardTeacher'
import BtnDelta from '@/components/btns/BtnDelta'
import {
  ImgTeacher1,
  ImgTeacher2,
  ImgTeacher3,
  ImgTeacher4
} from '@/components/imgs'

const Teachers = () => {
  const teachers = [
    {
      name: 'Иванов Иван Иванович',
      specialization: 'Семейная психология и частная практика',
      achievements:
        'Автор научных статей, сотрудник организации, обучил более 300 специалистов, имеет степень доктора наук',
      photo: <ImgTeacher1 name='Иванов Иван Иванович' />
    },
    {
      name: 'Ветров Сергей Михайлович',
      specialization: 'Семейная психология',
      achievements:
        'Автор научных статей, сотрудник организации, обучил более 300 специалистов, имеет степень доктора наук',
      photo: <ImgTeacher2 name='Иванов Иван Иванович' />
    },
    {
      name: 'Петрова Екатерина Сергеевна',
      specialization: 'Семейная психология',
      achievements:
        'Автор научных статей, сотрудник организации, обучил более 300 специалистов, имеет степень доктора наук',
      photo: <ImgTeacher3 name='Иванов Иван Иванович' />
    },
    {
      name: 'Вассарман Максим Сергеевич',
      specialization: 'Семейная психология и частная практика',
      achievements:
        'Автор научных статей, сотрудник организации, обучил более 300 специалистов, имеет степень доктора наук',
      photo: <ImgTeacher4 name='Иванов Иван Иванович' />
    }
  ]

  const teachersSlides = teachers.map((teacher, idx) => (
    <CardTeacher
      key={teacher.name + idx}
      photo={teacher.photo}
      name={teacher.name}
      specialization={teacher.specialization}
      achievements={teacher.achievements}
    />
  ))

  const mobileSwiperOptions = {
    slidesNum: 1.75,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 40
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Преподаватели программы</h2>
        <p className={stls.desc}>
          Преподают ведущие практикующие психологи и психоаналитики России{' '}
          <span className={stls.bold}>с опытом от 7 до 25 лет</span>
        </p>
        <div className={stls.teachers}>
          <SwiperContainer
            slides={teachersSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            alwaysDisabledOnDesktop
            isMultiRow
          />
        </div>
        <div className={stls.btnContainer}>
          <BtnDelta text={'Узнать всех'} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Teachers
