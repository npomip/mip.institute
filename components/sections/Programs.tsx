import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import Wrapper from '@/components/layout/Wrapper'
import { useFilteredItems } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/Programs.module.sass'
import CardProfession from '../cards/CardProfession'
import ResetFilter from '../filters/ResetFilter'

type MinMax = {
  min: number
  max: number
}

type ProgramsType = {
  ofType?: 'course' | 'profession'
  minmaxDuration: MinMax
  minmaxPrice: MinMax
}

const Programs = ({ ofType, minmaxDuration, minmaxPrice }: ProgramsType) => {
  const filteredItems = useFilteredItems()

  return (
    <section className={stls.container}>
      <div className={stls.sorting}>
        <ProgramsFilters ofType={ofType} />
      </div>
      <Wrapper>
        <div className={stls.filters}>
          <ResetFilter onIndex />
          {minmaxDuration && minmaxPrice && (
            <FiltersForLifeCourses
              cost={minmaxPrice}
              duration={minmaxDuration}
            />
          )}
        </div>

        <div className={stls.content}>
          <div className={stls.programs}>
            {filteredItems?.map((profession, idx) => (
              <CardProfession
                key={profession.title + idx}
                profession={profession}
              />
            ))}
          </div>
          {filteredItems?.length === 0 && (
            <>Кажется, что по вашему запросу ничего не нашлось</>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
