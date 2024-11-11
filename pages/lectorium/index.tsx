import LectoriumIndexCard from '@/components/cards/LectoriumIndexCard'
import routes from '@/config/routes'
import { handleGetStaticProps } from '@/lib/index'
import Wrapper from '@/ui/Wrapper'
import { GetStaticProps } from 'next'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import stls from '@/styles/pages/LectoriumSlug.module.sass'
import FilterTag from '@/components/filters/FilterTag'
import { useRouter } from 'next/router'
import CustomSelect from '@/ui/CustomSelect'
import { lectoriumOptoins } from 'constants/customSelect'
import Calendar from '@/ui/Calendar'
import { useEffect, useState } from 'react'

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
  const dates = lectoriums?.map(lectorium => lectorium.targetDate)

  const [filteredDates, setFilteredDates] = useState([null, null])
  const [filteredLectoriums, setFilteredLectoriums] = useState(lectoriums)
  const [isCalendarVisible, setIsCalendarVisible] = useState(true)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleToggleCalendar = visible => {
    setIsCalendarVisible(visible)
  }

  // Функция для получения отфильтрованных дат из компонента Calendar
  const handleFilteredDates = dates => {
    setFilteredDates(dates)
  }

  useEffect(() => {
    if (filteredDates[0] && filteredDates[1]) {
      const startDate = dayjs(filteredDates[0])
      const endDate = dayjs(filteredDates[1])

      const filtered = lectoriums.filter(lectorium => {
        const targetDate = dayjs(lectorium.targetDate)
        return (
          targetDate.isSameOrAfter(startDate, 'day') &&
          targetDate.isSameOrBefore(endDate, 'day')
        )
      })

      setFilteredLectoriums(filtered)
    } else {
      setFilteredLectoriums(lectoriums) // Показываем все, если нет диапазона
    }
  }, [filteredDates, lectoriums])

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
            onClick={() => router.push('/lectorium')}
            isActive={true}
            isCategories>
            Внутренние мероприятия
          </FilterTag>
          <FilterTag
            onClick={() => router.push('/lectorium')}
            isActive={false}
            isCategories>
            Внешние мероприятия
          </FilterTag>
          <CustomSelect
            onChange={() => {}}
            options={lectoriumOptoins}
            radius='50'
            height='30'
            mainColor='#6F6F6F'
            placeholder='Тип мероприятия'
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
            onClick={() => router.push('/lectorium')}
            isActive={false}
            disabled>
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
              <Calendar onDatesFiltered={handleFilteredDates} dates={dates} />
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
