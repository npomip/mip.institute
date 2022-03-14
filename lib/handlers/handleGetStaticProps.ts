import {
  TypeGeneralRoutesFront,
  TypePageHomeProps,
  TypeGeneralGetStaticPropsContext
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import { getStaticPropsPageHome, getStaticPropsPageReviews } from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
} & TypeGeneralGetStaticPropsContext

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props: TypePageHomeProps | {}
  revalidate: number
}> => {
  switch (page) {
    case routesFront.home:
      return await getStaticPropsPageHome({ context })

    case routesFront.reviews:
      return await getStaticPropsPageReviews({ context })

    default:
      return {
        props: {},
        revalidate: revalidate.default
      }
  }
}

export default handleGetStaticProps
