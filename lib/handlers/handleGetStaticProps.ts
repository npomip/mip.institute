import {
  TypeGeneralRoutesFront,
  TypeGeneralGetStaticPropsContext,
  TypePageDefaultProps,
  TypePageHomeProps,
  TypePageReviewsProps,
  TypePageTeachersProps,
  TypePageWebinarsProps,
  TypePageProgramsProps,
  TypePageProgramProps
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
import getStaticPropsPageJournal from '../getStaticProps/getStaticPropsJournal'

type TypeHandleGetStaticPropsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
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

      case routes.front.journal:
        return await getStaticPropsPageJournal({ context })

      default:
        return {
          props: {},
          revalidate: revalidate.default
        }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {},
      revalidate: revalidate.default
    }
  }
}

export default handleGetStaticProps
