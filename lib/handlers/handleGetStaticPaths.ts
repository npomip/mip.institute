import {
  TypeGeneralRoutesFront,
  TypePageProgramsPaths,
  TypePageProgramPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'
import {
  getStaticPathsPagePrograms,
  getStaticPathsPageProgram
} from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
  type?: 'Course' | 'Profession'
}

const handleGetStaticPaths = async ({
  page,
  type
}: TypeHandleGetStaticPathsProps): Promise<{
  paths: TypePageProgramsPaths | TypePageProgramPaths | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routesFront.programs:
      return await getStaticPathsPagePrograms({ type })

    case routesFront.program:
      return await getStaticPathsPageProgram({ type })

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
