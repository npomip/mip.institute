import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

export const calculateEventTimeAndDate = (targetDate: string) => {
  const date = dayjs(targetDate).tz('Europe/Moscow')
  const weekday = date.format('dd').toUpperCase()
  const dateWithDay = date.format('D MMM')
  const startTime = date.format('HH:mm')
  const formattedDate = `${weekday},\n${dateWithDay}`

  return {
    formattedDate,
    startTime
  }
}
