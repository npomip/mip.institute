import {
  TypeGeneralRoutesFront,
  TypePageProgramsPaths,
  TypePageProgramPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { routes, revalidate } from '@/config/index'
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
    case routes.front.programs:
      return await getStaticPathsPagePrograms({ type })

    case routes.front.program:
      return await getStaticPathsPageProgram({ type })

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
