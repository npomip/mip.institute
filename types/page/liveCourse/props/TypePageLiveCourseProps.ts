import TypeLibLiveCourse from '@/types/lib/liveCourse/TypeLibLiveCourse'
import TypeLibReviews from '@/types/lib/reviews/TypeLibReviews'

type TypePageLiveCourseProps = {
  readonly lifeCourse: TypeLibLiveCourse | null
  readonly reviews: TypeLibReviews | null
}

export default TypePageLiveCourseProps