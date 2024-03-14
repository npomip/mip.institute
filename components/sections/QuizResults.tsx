import Wrapper from '@/components/layout/Wrapper'
import routes from '@/config/routes'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/QuizResults.module.sass'
import { useContext } from 'react'
import CardQuizResult from '../cards/CardQuizResult'
import ImgTopCourse from '../imgs/programs/ImgTopCourse'

interface Props {
  result: string
}

const QuizResults = ({ result }: Props) => {
  const { programs } = useContext(ContextStaticProps)

  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }
  const x =
    result === 'clinic' || 'childrenPsy'
      ? 'Детский психолог'
      : 'Гештальт-психолог'

  const targetTitles = [
    'Психолог-консультант',
    'Когнитивно-поведенческий психотерапевт',
    'Психолог-диетолог. Нутрициолог',
    'Гештальт-терапевт',
    'Клиническая психология',
    'Детский психолог',
    'Психосоматика и телесная психотерапия'
  ]
  const topCourses = targetTitles.map(title =>
    programs.find(profession => profession.title === title)
  )

  const list =
    programs &&
    [...topCourses]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course?.title}
          width={200}
          height={200}
        />
      )
    }))

  const topCoursesSlides =
    list[0]?.title &&
    list.map((course, idx) => (
      <CardQuizResult
        href={`${routes.front.professions}/${course.studyFieldSlug}/${course.slug}`}
        key={course.name + idx}
        portrait={course?.image}
        title={course.title}
        studyHours={course.studyHours}
      />
    ))

  return (
    <section className={stls.container}>
      <Wrapper>
        <h3 className={stls.result}>{`Вам подойдёт профессия ${result}`}</h3>
        {topCoursesSlides}
      </Wrapper>
    </section>
  )
}

export default QuizResults
