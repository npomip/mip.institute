import { TypeGeneralRoutesFront, TypePageProgramsPaths } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'
import { getStaticPathsPagePrograms } from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
  type?: 'Course' | 'Profession'
}

const handleGetStaticPaths = async ({
  page,
  type
}: TypeHandleGetStaticPathsProps): Promise<{
  paths: TypePageProgramsPaths | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routesFront.programs:
      return await getStaticPathsPagePrograms({ type })

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
