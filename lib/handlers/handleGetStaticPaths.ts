import { routes } from '@/config/index'
import {
  getStaticPathsPageJournal,
  getStaticPathsPageJournals,
  getStaticPathsPageProgram,
  getStaticPathsPagePrograms,
  getStaticPathsPageSeminar,
  getStaticPathsPageSeminars
} from '@/lib/index'
import { TypePageProgramPaths, TypePageProgramsPaths } from '@/types/index'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'
import getStaticPathsPageBachelor from '../getStaticPaths/getStaticPathsPageBachelor'
import getStaticPathsPageLectorium from '../getStaticPaths/getStaticPathsPageLectorium'
import getStaticPathsPageLiveCourse from '../getStaticPaths/getStaticPathsPageLiveCourse'
import getStaticPathsPagePracticalTraining from '../getStaticPaths/getStaticPathsPagePracticalTraining'

type TypeHandleGetStaticPathsProps = {
  page: string
  type?: 'Course' | 'Profession'
}

const handleGetStaticPaths = async ({
  page,
  type
}: TypeHandleGetStaticPathsProps): Promise<{
  paths:
    | TypePageProgramsPaths
    | TypePageProgramPaths
    | TypePageJournalPaths
    | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routes.front.programs:
      return await getStaticPathsPagePrograms({ type })

    case routes.front.program:
      return await getStaticPathsPageProgram({ type })

    case routes.front.seminar:
      return await getStaticPathsPageSeminar()

    case routes.front.seminars:
      return await getStaticPathsPageSeminars()

    case routes.front.journal:
      return await getStaticPathsPageJournal()

    case routes.front.journals:
      return await getStaticPathsPageJournals()

    case routes.front.liveCourse:
      return await getStaticPathsPageLiveCourse()

    case routes.front.bachelor:
      return await getStaticPathsPageBachelor()

    case routes.front.practicalTraining:
      return await getStaticPathsPagePracticalTraining()

    case routes.front.lectorium:
      return await getStaticPathsPageLectorium()

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
