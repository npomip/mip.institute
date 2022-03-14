import {
  TypeGeneralRoutesFront,
  TypePageDefaultProps,
  TypeGeneralGetStaticPropsContext
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import { getStaticPropsDefault } from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
} & TypeGeneralGetStaticPropsContext

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props: TypePageDefaultProps | {}
  revalidate: number
}> => {
  switch (page) {
    case routesFront.home:
      return await getStaticPropsDefault({ context })

    default:
      return {
        props: {},
        revalidate: revalidate.default
      }
  }
}

export default handleGetStaticProps
