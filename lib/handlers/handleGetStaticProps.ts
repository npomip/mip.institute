import {
  TypeGeneralRoutesFront,
  TypePageDefaultProps,
  TypePageHomeProps,
  TypeGeneralGetStaticPropsContext,
  TypePageReviewsProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPageHome,
  getStaticPropsPageReviews,
  getStaticPropsDefault
} from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
} & TypeGeneralGetStaticPropsContext

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props: TypePageDefaultProps | TypePageHomeProps | TypePageReviewsProps | {}
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
