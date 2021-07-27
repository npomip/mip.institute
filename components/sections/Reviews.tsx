import stls from '@/styles/components/sections/Reviews.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ReviewCard from '@/components/general/ReviewCard'
import maleStudent from '@/public/assets/imgs/general/male-student.jpg'
import femaleStudent from '@/public/assets/imgs/general/female-student.jpg'
import TwoColumns from '@/components/layout/TwoColumns'

const studentsReviews = [
  {
    title: (
      <>
        Как Иван выучился на Психолога и&nbsp;зарабатывает от 100 т.р. в месяц
      </>
    ),
    name: 'Иван Иванов',
    occupation: 'Студент факультета семейной психологии',
    photo: maleStudent
  },
  {
    title: (
      <>
        Как Иван выучился на Психолога и&nbsp;зарабатывает от 100 т.р. в месяц
      </>
    ),
    name: 'Иван Иванов',
    occupation: 'Студент факультета семейной психологии',
    photo: femaleStudent
  }
]

const Reviews = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Отзывы и статьи наших студентов</h2>
        <TwoColumns slider>
          {studentsReviews.map((review, idx) => (
            <ReviewCard
              key={review.name + idx}
              title={review.title}
              photo={review.photo}
              name={review.name}
              occupation={review.occupation}
            />
          ))}
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default Reviews
