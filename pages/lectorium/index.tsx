import { useEffect, useState } from 'react'
import LectoriumIndexCard from '@/components/cards/LectoriumIndexCard'
import routes from '@/config/routes'
import { handleGetStaticProps } from '@/lib/index'
import Wrapper from '@/ui/Wrapper'
import { GetStaticProps } from 'next'
import stls from '@/styles/pages/LectoriumSlug.module.sass'
import FilterTag from '@/components/filters/FilterTag'
import { useRouter } from 'next/router'
import CustomSelect from '@/ui/CustomSelect'
import { lectoriumOptions } from 'constants/customSelect'
import Calendar from '@/ui/Calendar'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ru'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import SeoPagesLectoriums from '@/components/seo/SeoPageLectoriums'
import Breadcrumbs from '@/ui/Breadcrumbs'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const LectoriumPage = ({ lectoriums }) => {
  const router = useRouter()
  const today = dayjs()

  const [showPast, setShowPast] = useState(false)
  const [selectedType, setSelectedType] = useState(null)
  const [filteredDates, setFilteredDates] = useState([null, null])
  const [filteredLectoriums, setFilteredLectoriums] = useState([])
  const [isCalendarVisible, setIsCalendarVisible] = useState(true)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const [dates, setDates] = useState([])

  useEffect(() => {
    const baseFilter = lectoriums.filter(lect => {
      const targetDate = dayjs(lect.targetDate)
      return showPast
        ? targetDate.isSameOrBefore(today, 'day')
        : targetDate.isSameOrAfter(today, 'day')
    })

    const typeFilter = selectedType
      ? baseFilter.filter(lect => lect.type === selectedType)
      : baseFilter

    const sortedByDate = [...typeFilter].sort((a, b) =>
      dayjs(a.targetDate).diff(dayjs(b.targetDate))
    )

    setFilteredLectoriums(sortedByDate)
    setDates(sortedByDate.map(lectorium => lectorium.targetDate))
  }, [showPast, selectedType, lectoriums])

  const handleToggleCalendar = visible => {
    setIsCalendarVisible(visible)
  }

  const handleFilteredDates = dates => {
    setFilteredDates(dates)
  }

  useEffect(() => {
    if (filteredDates[0] && filteredDates[1]) {
      const startDate = dayjs(filteredDates[0])
      const endDate = dayjs(filteredDates[1])

      const dateFiltered = lectoriums.filter(lectorium => {
        const targetDate = dayjs(lectorium.targetDate)
        return (
          targetDate.isSameOrAfter(startDate, 'day') &&
          targetDate.isSameOrBefore(endDate, 'day')
        )
      })

      setFilteredLectoriums(dateFiltered)
    }
  }, [filteredDates, lectoriums])

  const handleInnerEvents = () => {
    setShowPast(!showPast)
  }

  const handleSelectChange = (selectedOption: (typeof lectoriumOptions)[0]) => {
    setSelectedType(selectedOption?.value || null)
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <SeoPagesLectoriums />
        <Breadcrumbs isJournal />
        <h1>Семинары по психологии</h1>
        <p className={stls.subtitle}>
          Это раздел с образовательными мероприятия, такие как очные мастер
          классы, супервизии, воркшопы и т.п
        </p>
        <div className={stls.tags}>
          <FilterTag
            onClick={() => router.push('/webinars')}
            isActive={false}
            isCategories>
            Вебинары
          </FilterTag>
          <FilterTag
            onClick={handleInnerEvents}
            isActive={!showPast}
            isCategories>
            Внутренние мероприятия
          </FilterTag>
          <FilterTag
            onClick={() => router.push('/lectorium')}
            isActive={false}
            disabled
            isCategories>
            Внешние мероприятия
          </FilterTag>
          <CustomSelect
            onChange={handleSelectChange}
            options={lectoriumOptions}
            radius='50'
            height='30'
            mainColor='#6F6F6F'
            placeholder='Все мероприятия'
            value={lectoriumOptions.find(
              option => option.value === selectedType
            )}
          />
          {isMobileAndTabletLayout && (
            <CustomSelect
              onChange={() => {}}
              onToggleCalendar={handleToggleCalendar}
              options={[]}
              noOptionsMessage={() => null}
              radius='50'
              height='30'
              mainColor='#8F60FF'
              placeholder='Календарь'
            />
          )}
          <FilterTag
            isActive={!!showPast}
            onClick={() => setShowPast(prev => !prev)}>
            Прошедшие мероприятия
          </FilterTag>
        </div>
        <div className={stls.firstRow}>
          <div className={stls.cardWrapper}>
            {filteredLectoriums.length > 0 && (
              <LectoriumIndexCard card={filteredLectoriums[0]} />
            )}
          </div>
          <div className={stls.calendarWrapper}>
            {isCalendarVisible && (
              <Calendar onDatesFiltered={handleFilteredDates} dates={dates} selectRange={true} onSupervisionPagesStyle={false}/>
            )}
          </div>
        </div>

        <div className={stls.lectoriumGrid}>
          {filteredLectoriums.slice(1).map(lectorium => (
            <LectoriumIndexCard key={lectorium.slug} card={lectorium} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectoriums })

export default LectoriumPage
