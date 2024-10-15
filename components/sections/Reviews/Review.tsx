import { ImgReview } from '@/components/imgs'
import getImageHeight from '@/helpers/getImageHeight'
import styles from '@/styles/components/sections/ReviewList.module.sass'

export default function Review({ review }) {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.img}>
          <ImgReview
            src={review?.picture?.[0]?.url}
            alt={review.name}
            width={100}
            height={getImageHeight({
              width: 100,
              widthInitial: review?.picture?.[0]?.width,
              heightInitial: review?.picture?.[0]?.height
            })}
          />
        </div>
        <div className={styles.name}>
          <p>{review.title}</p>
          <p>{review.name}</p>
          <p>{review.profession}</p>
        </div>
      </div>
      <div className={styles.review}>
        <p>{review.story}</p>
      </div>
    </div>
  )
}
