import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Courses from '@/components/programs/Courses'
import Professions from '@/components/programs/Professions'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { filterProgramsByStudyField } from '@/helpers/index'
import { routeCourses, routeProfessions } from '@/data/routes'

type ProgramsType = {
  ofType?: 'course' | 'profession'
  withTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
  withFilters?: boolean
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false,
  threerow = false,
  withFilters = false
}: ProgramsType) => {
  const { courses, professions, curProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  const router = useRouter()

  const coursesFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: courses,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const professionsFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: professions,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const data = {
    courses: curProgramsStudyFieldSlug ? coursesFiltered : courses,
    professions: curProgramsStudyFieldSlug ? professionsFiltered : professions
  }

  useEffect(() => {
    ofType === 'course' &&
      data.courses.length === 0 &&
      router.replace(routeCourses)
    ofType === 'profession' &&
      data.professions.length === 0 &&
      router.replace(routeProfessions)
  }, [])

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.withFilters]: withFilters
      })}>
      <Wrapper>
        {withFilters && (
          <div className={stls.filters}>
            <ProgramsFilters ofType={ofType} />
          </div>
        )}
        <div className={stls.content}>
          {withTitle && <h2 className={stls.title}>Наши программы</h2>}
          <div className={stls.programs}>
            {ofType === 'course' && data.courses && data.courses.length > 0 && (
              <div className={stls.courses}>
                <Courses
                  biggerTitle={!withTitle}
                  withBtn={withBtn}
                  courses={data.courses}
                  withQty={withQty}
                  threerow={threerow}
                />
              </div>
            )}
            {ofType === 'profession' &&
              data.professions &&
              data.professions.length > 0 && (
                <div className={stls.professions}>
                  <Professions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={data.professions}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}

            {!ofType && data.courses && data.courses.length > 0 && (
              <div className={stls.courses}>
                <Courses
                  biggerTitle={!withTitle}
                  withBtn={withBtn}
                  courses={data.courses}
                  withQty={withQty}
                  threerow={threerow}
                />
              </div>
            )}

            {!ofType && data.professions && data.professions.length > 0 && (
              <div className={stls.professions}>
                <Professions
                  biggerTitle={!withTitle}
                  withBtn={withBtn}
                  professions={data.professions}
                  withQty={withQty}
                  threerow={threerow}
                />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
