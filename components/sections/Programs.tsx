import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import Wrapper from '@/components/layout/Wrapper'
import Professions from '@/components/programs/Professions'
import { useFilteredItems } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/Programs.module.sass'
import cn from 'classnames'
import { findMinMaxForSlider } from '../funcs/findMinMaxForSlider'
import ProgramType from '../general/ProgramType'
import SearchMobile from '../general/SearchMobile'
import { TypeLibPrograms } from '@/types/index'

type ProgramsType = {
  ofType?: 'course' | 'profession'
  withTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
  programs: TypeLibPrograms
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false,
  threerow = false,
  programs
}: ProgramsType) => {
  const filteredItems = useFilteredItems()

  const prices = programs && programs.map(el => el.price)
  const programsDuration =
    programs && programs.map(el => el?.studyMounthsDuration)
  const minmaxDuration =
    programsDuration && findMinMaxForSlider(programsDuration)
  const minmaxPrice = prices && findMinMaxForSlider(prices)

  return (
    <section
      className={cn({
        [stls.container]: true,
        [stls.withFilters]: true
      })}>
      <div className={stls.sorting}>
        <ProgramsFilters ofType={ofType} />
      </div>
      <Wrapper>
        <div className={stls.filters}>
          {minmaxDuration && minmaxPrice && (
            <FiltersForLifeCourses
              cost={minmaxPrice}
              duration={minmaxDuration}
            />
          )}
          <ProgramType />
        </div>

        <div className={stls.content}>
          <SearchMobile />
          {withTitle && <h2 className={stls.title}>Наши программы</h2>}
          <div className={stls.programs}>
            <div className={stls.professions}>
              <Professions
                biggerTitle={!withTitle}
                withBtn={withBtn}
                withQty={withQty}
                threerow={threerow}
              />
            </div>

            {filteredItems?.length === 0 && (
              <>Кажется, что по вашему запросу ничего не нашлось</>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
