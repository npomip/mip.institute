import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ru'
import stls from './Calendar.module.sass'
import classNames from 'classnames'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')

type Props = {
  dates: string[]
  onDatesFiltered: (dates: string[]) => void
}

const Calendar = ({ dates, onDatesFiltered }: Props) => {
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
