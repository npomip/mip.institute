import {
  ProgramTypes,
  useFilter,
  useFilterDispatch,
  useFilteredItems
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useRouter } from 'next/router'
import { findFilteredProgramsLength } from '@/helpers/general/findFilteredProgramsLength'
import { findProgramsLength } from '@/helpers/general/findProgramsLength'
import { findProgrmasLengthByCustomProperty } from '@/helpers/general/findProgrmasLengthByCustomProperty'
import Popup from 'reactjs-popup'
import IconInfo from '../icons/IconInfo'
import { getUniqueCategories } from '../funcs/getUniqueCategories'

const ProgramsFilters = ({ studyFields = [], allPrograms = [] }) => {
  const { categories, filters } = useFilter()
  const dispatch = useFilterDispatch()

  const filteredItems = useFilteredItems()

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleSelect = (value: any) => {
    dispatch({
      type: 'sortFilter',
      payload: value.value
    })
  }

  const handleTag = e => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    if (e.value === studyFieldSlug) {
      return null
    }

    router.push({
      pathname: `/${ofType}/${e.value}`,
      query: rest
    })
  }

  const router = useRouter()

  const { asPath, query } = router

  const { ofType, studyFieldSlug, filter, opened } = query
  
  const handleNavigation = (destination: string) => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    router.push({
      pathname: destination,
      query: rest
    })
  }
  const handleSetPopularCourses = () => {
    if (filter !== 'popular') {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, filter: 'popular' }
      })
      // dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
    } else {
      const { filter, ...rest } = router.query
      router.push({
        pathname: router.pathname,
        query: rest
      })
      // dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
    }
  }

  const options = studyFields.map(el => ({
    value: el.studyFieldSlug,
    label: el.studyField
  }))

  const favprograms = allPrograms.filter(el => el.isPopular === true)

  const contentStyle = {
    background: '#ffffff',
    paddingLeft: '30px',
    minWidth: '400px',
    paddingRight: '30px',
    paddingTop: '30px',
    border: '1px solid #6F01C6'
  }

  return (
    <div className={stls.container}>
      <div className={stls.sorting}>
        <FilterTag
          onClick={() => handleNavigation('/programs')}
          isActive={ofType === 'programs'}
          quantity={
            ofType === 'programs' && !studyFieldSlug
              ? findProgramsLength(filteredItems, 'programs')
              : filter === 'popular'
              ? favprograms?.length
              : ofType === 'programs' && studyFieldSlug
              ? findProgramsLength(allPrograms, 'programs') -
                findFilteredProgramsLength(
                  allPrograms,
                  studyFieldSlug,
                  ofType as string
                ) +
                findFilteredProgramsLength(
                  filteredItems,
                  studyFieldSlug,
                  ofType as string
                )
              
              : findProgramsLength(allPrograms, 'programs')
          }
          isProgram>
          Все курсы
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/professions')}
          withPopup
          popupText='Программы профессиональной переподготовки рассчитаны на тех, кто решил освоить новую профессию с нуля. Длительность обучения — от 6 до 24 месяцев в зависимости от выбранного направления. По окончании обучения выдаются диплом о профессиональной переподготовке установленного образца (заносится в реестр ФИС ФРДО) и международное приложение к диплому Supplement. Присваиваемая квалификация и дополнительная специализация зависят от направления обучения. '
          isActive={ofType === 'professions'}
          quantity={
            ofType === 'professions' && !studyFieldSlug
              ? findProgramsLength(filteredItems, 'professions')
              : filter === 'popular'
              ? favprograms?.length
              : ofType === 'professions' && studyFieldSlug
              ? findProgramsLength(allPrograms, 'professions') -
                findFilteredProgramsLength(
                  allPrograms,
                  studyFieldSlug,
                  ofType as string
                ) +
                findFilteredProgramsLength(
                  filteredItems,
                  studyFieldSlug,
                  ofType as string
                )
              : findProgramsLength(allPrograms, 'professions')
          }
          isProgram>
          Профессиональная переподготовка
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/courses')}
          withPopup
          popupText='Программы повышения квалификации подходят тем, кто хочет углубить
          знания и получить новые навыки по профилю своей деятельности.
          Длительность обучения — от 1 до 6 месяцев. Выпускники получают
          удостоверение о повышении квалификации установленного образца
          (заносится в реестр ФИС ФРДО).'
          isActive={ofType === 'courses'}
          quantity={
            ofType === 'courses' && !studyFieldSlug
              ? findProgramsLength(filteredItems, 'courses')
              : filter === 'popular'
              ? findProgramsLength(favprograms, 'courses')
              : ofType === 'courses' && studyFieldSlug
              ? findProgramsLength(allPrograms, 'courses') -
                findFilteredProgramsLength(
                  allPrograms,
                  studyFieldSlug,
                  ofType as string
                ) +
                findFilteredProgramsLength(
                  filteredItems,
                  studyFieldSlug,
                  ofType as string
                )
              : findProgramsLength(allPrograms, 'courses')
          }
          isProgram>
          Повышение квалификации
        </FilterTag>

        {findProgramsLength(allPrograms, 'bachelor') > 0 && (
          <FilterTag
            onClick={() => handleNavigation('/bachelor')}
            isActive={ofType === 'bachelor'}
            quantity={
              ofType === 'bachelor' && !studyFieldSlug
                ? findProgramsLength(filteredItems, 'bachelor')
                : ofType === 'bachelor' && studyFieldSlug
                ? findProgramsLength(allPrograms, 'bachelor') -
                  findFilteredProgramsLength(
                    allPrograms,
                    studyFieldSlug,
                    ofType as string
                  ) +
                  findFilteredProgramsLength(
                    filteredItems,
                    studyFieldSlug,
                    ofType as string
                  )
                : findProgramsLength(allPrograms, 'bachelor')
            }
            isProgram>
            Высшее образование
          </FilterTag>
        )}

        {findProgramsLength(allPrograms, 'practice') > 0 && (
          <FilterTag
            onClick={() => handleNavigation('/practice')}
            isActive={ofType === 'practice'}
            quantity={
              ofType === 'practice' && !studyFieldSlug
                ? findProgramsLength(filteredItems, 'practice')
                : ofType === 'practice' && studyFieldSlug
                ? findProgramsLength(allPrograms, 'practice') -
                  findFilteredProgramsLength(
                    allPrograms,
                    studyFieldSlug,
                    ofType as string
                  ) +
                  findFilteredProgramsLength(
                    filteredItems,
                    studyFieldSlug,
                    ofType as string
                  )
                : findProgramsLength(allPrograms, 'practice')
            }
            isProgram>
            Практическая подготовка
          </FilterTag>
        )}

        <FilterTag
          onClick={handleSetPopularCourses}
          isActive={filter === 'popular'}
          quantity={findProgrmasLengthByCustomProperty(
            filteredItems,
            'isPopular',
            true
          )}
          isProgram>
          Популярные курсы
        </FilterTag>
        {!isMobileAndTabletLayout && <ProgramSelect onChange={handleSelect} />}
      </div>

      <div className={stls.categories}>
        {!isMobileAndTabletLayout &&
          studyFields.map((el, i) => (
            <FilterTag
              key={el.studyField + i}
              onClick={() =>
                handleNavigation(`/${ofType}/${el.studyFieldSlug}`)
              }
              isActive={studyFieldSlug === el.studyFieldSlug}
              quantity={
                studyFieldSlug === el.studyFieldSlug
                  ? findFilteredProgramsLength(
                      filteredItems,
                      el.studyFieldSlug,
                      ofType as string
                    )
                  : !studyFieldSlug
                  ? findFilteredProgramsLength(
                      filteredItems,
                      el.studyFieldSlug,
                      ofType as string
                    )
                  : findFilteredProgramsLength(
                      allPrograms,
                      el.studyFieldSlug,
                      ofType as string,
                      filter as string
                    )
              }
              isCategories>
              {el.studyField}
            </FilterTag>
          ))}
      </div>
      {isMobileAndTabletLayout && (
        <div className={stls.mobileSelect}>
          <ProgramSelect
            options={options}
            onChange={handleTag}
            mainColor='#fb6c2e'
            width='345'
          />
          <ProgramSelect onChange={handleSelect} marginTop='10' />
        </div>
      )}
    </div>
  )
}

export default ProgramsFilters
