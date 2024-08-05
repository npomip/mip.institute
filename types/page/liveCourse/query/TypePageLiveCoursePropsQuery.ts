import TypeLibLiveCourse from "@/types/lib/liveCourse/TypeLibLiveCourse"
import TypeLibReviews from "@/types/lib/reviews/TypeLibReviews"
type TypePageLiveCoursePropsQuery = {
  readonly reviews: TypeLibReviews | null
  readonly lifeCourse: TypeLibLiveCourse | null
}

export default TypePageLiveCoursePropsQuery