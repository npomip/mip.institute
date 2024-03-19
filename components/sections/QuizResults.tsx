import Wrapper from '@/components/layout/Wrapper'
import routes from '@/config/routes'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/QuizResults.module.sass'
import { useContext } from 'react'
import CardQuizResult from '../cards/CardQuizResult'
import Image from 'next/image'
import testResultsMarker from '../funcs/testResultsMarker'

interface Props {
  result: string
}

const QuizResults = ({ result }: Props) => {
  const { programs } = useContext(ContextStaticProps)

  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }
  const resultValues = result.split(',')
  const marker = []

  resultValues.forEach(item => {
    marker.push(...testResultsMarker(item))
  })

  const professionsInResult = marker.map(title =>
    programs.find(profession => profession.title === title)
  )

  const list =
    programs &&
    [...professionsInResult]?.map(course => ({
      ...course,
      image: (
        <Image
          src={course?.heroPicture?.url}
          alt={course?.title}
          height={200}
          width={200}
          className={stls.img}
        />
      )
    }))

  return (
    <section className={stls.container}>
      <Wrapper>
        <h3 className={stls.result}>{`Вам подойдут профессии:`}</h3>
        <div className={stls.content}>
          {list.map((course, idx) => (
            <CardQuizResult
              href={`${routes.front.professions}/${course.studyFieldSlug}/${course.slug}`}
              key={ idx}
              portrait={course?.image}
              title={course.title}
              studyHours={course.studyHours}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default QuizResults
