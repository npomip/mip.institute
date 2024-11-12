import {
  TypeGeneralGetStaticPropsContext,
  TypePageDefaultProps,
  TypePageHomeProps,
  TypePageReviewsProps,
  TypePageTeachersProps,
  TypePageWebinarsProps,
  TypePageProgramsProps,
  TypePageProgramProps,
  TypePageSeminarsProps
} from '@/types/index'
import { routes, revalidate } from '@/config/index'
import {
  getStaticPropsPageHome,
  getStaticPropsPageReviews,
  getStaticPropsDefault,
  getStaticPropsPageTeachers,
  getStaticPropsPageWebinars,
  getStaticPropsPagePrograms,
  getStaticPropsPageProgram
} from '@/lib/index'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import getStaticPropsPageJournal from '../getStaticProps/getStaticPropsPageJournal'
import getStaticPropsPageSeminars from '../getStaticProps/getStaticPropsPageSeminars'
import getStaticPropsPageSeminar from '../getStaticProps/getStaticPropsPageSeminar'
import TypePageSeminarProps from '@/types/page/seminar/props/TypePageSeminarProps'
import getStaticPropsPageJournals from '../getStaticProps/GetStaticPropsPageJournals'
import TypePageLiveCoursesProps from '@/types/page/liveCourses/props/TypePageLiveCoursesProps'
import getStaticPropsPageLiveCourses from '../getStaticProps/getStaticPropsPageLiveCourses'
import TypePageLiveCourseProps from '@/types/page/liveCourse/props/TypePageLiveCourseProps'
import getStaticPropsPageLiveCourse from '../getStaticProps/getStaticPropsPageLiveCourse'
import getStaticPropsBachelor from '../getStaticProps/getStaticPropsPageBachelor'
import getStaticPropsBachelors from '../getStaticProps/getStaticPropsPageBachelors'
import getStaticPropsPracticalTraining from '../getStaticProps/getStaticPropsPagePracticalTraining'
import getStaticPropsPracticalTrainings from '../getStaticProps/getStaticPropsPagePracticalTrainings'
import TypePageBachelorProps from '@/types/page/bachelor/props/TypePageBachelorProps'
import TypePagePracticalTrainingProps from '@/types/page/practicalTraining/props/TypePagePracticalTrainingProps'
import TypePageBachelorsProps from '@/types/page/bachelors/props/TypePageBachelorsProps'
import TypePagePracticalTrainingsProps from '@/types/page/practicalTrainings/props/TypePagePracticalTrainingsProps'
import getStaticPropsPageLectorium from '../getStaticProps/getStaticPropsPageLectorium'
import getStaticPropsPageLectoriums from '../getStaticProps/getStaticPropsPageLectoriums'
type TypeHandleGetStaticPropsProps = {
  page: string
  type?: string | null
} & TypeGeneralGetStaticPropsContext
const handleGetStaticProps = async ({
  page,
  type,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props:
    | TypePageDefaultProps
    | TypePageHomeProps
    | TypePageReviewsProps
    | TypePageTeachersProps
    | TypePageWebinarsProps
    | TypePageProgramsProps
    | TypePageProgramProps
    | TypePageJournalProps
    | TypePageSeminarsProps
    | TypePageSeminarProps
    | TypePageLiveCoursesProps
    | TypePageLiveCourseProps
    | TypePageBachelorProps
    | TypePageBachelorsProps
    | TypePagePracticalTrainingProps
    | TypePagePracticalTrainingsProps
    | {}
  revalidate: number | boolean
}> => {
  try {
    switch (page) {
      case routes.front.about:
        return await getStaticPropsDefault({ context })

      case routes.front.contact:
        return await getStaticPropsDefault({ context })

      case routes.front.home:
        return await getStaticPropsPageHome({ context })

      case routes.front.legal:
        return await getStaticPropsDefault({ context })

      case routes.front.payment:
        return await getStaticPropsDefault({ context })

      case routes.front.gratefull:
        return await getStaticPropsDefault({ context })

      case routes.front.reviews:
        return await getStaticPropsPageReviews({ context })

      case routes.front.teachers:
        return await getStaticPropsPageTeachers({ context })

      case routes.front.webinars:
        return await getStaticPropsPageWebinars({ context })

      case routes.front.programs:
        return await getStaticPropsPagePrograms({ context })

      case routes.front.program:
        return await getStaticPropsPageProgram({ context, type })

      case routes.front.journals:
        return await getStaticPropsPageJournals({ context })

      case routes.front.journal:
        return await getStaticPropsPageJournal({ context })

      case routes.front.seminars:
        return await getStaticPropsPageSeminars({ context })

      case routes.front.seminar:
        return await getStaticPropsPageSeminar({ context })

      case routes.front.liveCourses:
        return await getStaticPropsPageLiveCourses({ context })

      case routes.front.liveCourse:
        return await getStaticPropsPageLiveCourse({ context })

      case routes.front.bachelors:
        return await getStaticPropsBachelors({ context })

      case routes.front.bachelor:
        return await getStaticPropsBachelor({ context })

      case routes.front.practicalTrainings:
        return await getStaticPropsPracticalTrainings({ context })

      case routes.front.practicalTraining:
        return await getStaticPropsPracticalTraining({ context })

      case routes.front.lectoriums:
        return await getStaticPropsPageLectoriums({ context })

      case routes.front.lectorium:
        return await getStaticPropsPageLectorium({ context })

      default:
        return {
          props: {},
          revalidate: revalidate.default
        }
    }
  } catch (err) {
    console.log('catch static props', err)
    return {
      props: {},
      revalidate: revalidate.default
    }
  }
}

export default handleGetStaticProps
