import Wrapper from '@/components/layout/Wrapper'
import styles from '@/styles/components/sections/ReviewList.module.sass'
import Review from './Review'

type ReviewsType = {
  reviews: any
}

export default function ReviewList({ reviews }: ReviewsType) {
  return (
    <Wrapper>
      <h1 className={styles.title}>Отзывы и статьи наших студентов</h1>
    <div className={styles.box}>
      {reviews.map((review, i) => (
        <Review key={i} review={review} />
      ))}
    </div>
    </Wrapper>
  )
}
