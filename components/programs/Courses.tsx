import stls from '@/styles/components/programs/Courses.module.sass'
import CardCourse from '@/components/cards/CardCourse'
import { BtnDelta } from '@/components/btns'

const Courses = () => {
  const courses = [
    {
      title: 'Психоанализ и психологическое консультирование',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Название обучающей программы',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Кризисный психолог',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Психоанализ и психологическое консультирование',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Психоанализ и психологическое консультированиее',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Название обучающие программы',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Кризисный психолог',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    },
    {
      title: 'Психоанализ и психологическое консультирование',
      type: 'course',
      typeLabel: 'Курс',
      dur: { months: 4 },
      durLabel: '4 месяца'
    }
  ]

  return (
    <div className={stls.courses}>
      <hgroup>
        <h3 className={stls.title}>Курсы</h3>
        <p className={stls.subTitle}>
          Короткие программы, чтобы изучить один конкретный навык
        </p>
      </hgroup>
      <div>
        {courses.map((course, idx) => (
          <CardCourse key={course.title + idx} course={course} />
        ))}
      </div>
      <BtnDelta text={'Смотреть все курсы'} />
    </div>
  )
}

export default Courses
