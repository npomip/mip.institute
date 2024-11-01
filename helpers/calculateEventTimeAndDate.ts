import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')

export const calculateEventTimeAndDate = (targetDate: string) => {
  const date = dayjs(targetDate).tz('Europe/Moscow')
  const weekday = date.format('dd').toUpperCase()
  const dateWithDay = date.format('D MMM')
  const startTime = date.format('HH:mm')
  const formattedDate = `${weekday},\n${dateWithDay}`

  const weekdayForCard = capitalizeFirstLetter(date.format('dddd'))
  const formattedDateForCard = `${weekdayForCard},\n${dateWithDay}`

  return {
    formattedDate,
    startTime,
    formattedDateForCard
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
