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
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPageHome,
  getStaticPropsPageReviews,
  getStaticPropsDefault,
  getStaticPropsPageTeachers,
  getStaticPropsPageWebinars,
  getStaticPropsPagePrograms,
  getStaticPropsPageProgram
} from '@/lib/index'

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
    | {}
  revalidate: number
}> => {
  try {
    switch (page) {
      case routesFront.about:
        return await getStaticPropsDefault({ context })

      case routesFront.contact:
        return await getStaticPropsDefault({ context })

      case routesFront.home:
        return await getStaticPropsPageHome({ context })

      case routesFront.legal:
        return await getStaticPropsDefault({ context })

      case routesFront.payment:
        return await getStaticPropsDefault({ context })

      case routesFront.reviews:
        return await getStaticPropsPageReviews({ context })

      case routesFront.teachers:
        return await getStaticPropsPageTeachers({ context })

      case routesFront.webinars:
        return await getStaticPropsPageWebinars({ context })

      case routesFront.programs:
        return await getStaticPropsPagePrograms({ context })

      case routesFront.program:
        return await getStaticPropsPageProgram({ context, type })

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
