import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ru'
import stls from './Calendar.module.sass'
import classNames from 'classnames'
// import 'react-calendar/dist/Calendar.css'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')

const sampleDates = [
  '2024-11-01',
  '2024-11-02',
  '2024-11-03',
  '2024-11-04',
  '2024-11-05',
  '2024-11-06',
  '2024-11-07',
  '2024-11-08',
  '2024-11-20',
  '2024-11-21',
  '2024-11-22',
  '2024-11-23',
  '2024-11-24'
]

const Calendar = ({ dates = sampleDates, onDatesFiltered }) => {

  const [isClient, setIsClient] = useState(false)

  const eventDatesArray = dates.map(date =>
    dayjs(date).tz('Europe/Moscow').format('YYYY-MM-DD')
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  const onChangeHandler = selectedRange => {
    const startDate = dayjs(selectedRange[0]).format('YYYY-MM-DD')
    const endDate = dayjs(selectedRange[1]).format('YYYY-MM-DD')
    onDatesFiltered([startDate, endDate])
  }

  const getTileClassName = ({ date, view }) => {
    const currentDate = dayjs(date).format('YYYY-MM-DD')
    if (view === 'month' && eventDatesArray.includes(currentDate)) {
      return stls.eventDate
    }
    return null
  }

  if (!isClient) return null

  return (
    <ReactCalendar
      selectRange={true}
      onChange={val => onChangeHandler(val)}
      className={stls.calendar}
      prevLabel={
        <div className={stls.bgArrow}>
          <div className={classNames(stls.prev, stls.arrow)}></div>
        </div>
      }
      nextLabel={
        <div className={stls.bgArrow}>
          <div className={classNames(stls.arrow)}></div>
        </div>
      }
      maxDetail='month'
      minDetail='month'
      tileClassName={getTileClassName}
      formatMonthYear={(locale, date) => dayjs(date).format('MMMM YYYY')}
    />
  )
}

export default Calendar
