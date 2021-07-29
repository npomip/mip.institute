import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import { ImgCourse1 } from '@/components/imgs'

const Programs = () => {
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
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Наши программы</h2>
        <div className={stls.programs}>
          <div className={stls.courses}>
            <hgroup>
              <h3 className={stls.subTitle}>Курсы</h3>
              <p className={stls.subsubTitle}>
                Короткие программы, чтобы изучить один конкретный навык
              </p>
            </hgroup>
            <ul className={stls.coursesList}>
              {courses.map((course, idx) => (
                <li key={course.title + idx} className={stls.course}>
                  <div className={stls.courseImg}>
                    <ImgCourse1 />
                  </div>
                  <div className={stls.courseText}>
                    <div className={stls.courseInfo}>
                      <span className={stls.typeLabel}>{course.typeLabel}</span>
                      <span className={stls.durLabel}>{course.durLabel}</span>
                    </div>
                    <h4 className={stls.courseTitle}>{course.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
