import {
  TypeRoutesFront,
  TypePageProgramsPaths,
  TypePageStudyFieldPaths,
  TypePageProgramPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'
import {
  getStaticPathsPagePrograms,
  getStaticPathsPageStudyField,
  getStaticPathsPageProgram
} from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticPaths = async ({
  page
}: TypeHandleGetStaticPathsProps): Promise<{
  paths:
    | TypePageProgramsPaths
    | TypePageStudyFieldPaths
    | TypePageProgramPaths
    | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routesFront.programs:
      return await getStaticPathsPagePrograms()

    case routesFront.programsCategoryStudyField:
      return await getStaticPathsPageStudyField()

    case routesFront.programsCategoryStudyFieldProgram:
      return await getStaticPathsPageProgram()

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
