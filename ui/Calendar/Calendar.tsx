import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ru'
import stls from './Calendar.module.sass'
import classNames from 'classnames'
import { GroupData } from '@/types/page/group-supervision/GroupSupervisionSchedule'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')

type Props = {
  dates: string[] | GroupData[]
  onDatesFiltered?: (dates: string[]) => void
  selectRange?: boolean
  customStyle?: boolean
}

type TileClassNameProps = {
  date: Date
  view: string
}

const Calendar = ({ dates, onDatesFiltered, selectRange, customStyle }: Props) => {
  const [isClient, setIsClient] = useState(false)

  const calendarClass = customStyle ? stls.customCalendar : stls.calendar
  const containerStyle = customStyle ? stls.bgArrowCustom : stls.bgArrow
  const labelStyle = customStyle ? stls.arrowCustom : stls.arrow
  const initialDate = new Date(2025, 0, 1)

  const eventDatesArray = dates.map(date => dayjs(date).tz('Europe/Moscow').format('YYYY-MM-DD'))

  useEffect(() => {
    setIsClient(true)
  }, [])

  const onChangeHandler = selectedRange => {
    const startDate = dayjs(selectedRange[0]).format('YYYY-MM-DD')
    const endDate = dayjs(selectedRange[1]).format('YYYY-MM-DD')
    onDatesFiltered([startDate, endDate])
  }

  const getTileClassName = ({ date }: TileClassNameProps): string => {
    const currentDate = dayjs(date).format('YYYY-MM-DD')
    let className = ''

    if (typeof dates[0] === 'string') {
      if (eventDatesArray.includes(currentDate)) {
        className = stls.eventDate
      }
    } else {
      ;(dates as GroupData[]).forEach(group => {
        const groupDates = group.dates.map(date => dayjs(date).format('YYYY-MM-DD'))
        if (groupDates.includes(currentDate)) {
          className = stls[group.classEventDate]
        }
      })
    }

    return className
  }

  if (!isClient) return null

  return (
    <ReactCalendar
      defaultValue={selectRange ? null : initialDate}
      selectRange={selectRange}
      onChange={val => (selectRange ? onChangeHandler(val) : '')}
      className={calendarClass}
      prevLabel={
        <div className={containerStyle}>
          <div className={classNames(stls.prev, labelStyle)}></div>
        </div>
      }
      nextLabel={
        <div className={containerStyle}>
          <div className={classNames(labelStyle)}></div>
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
