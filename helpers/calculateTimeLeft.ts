import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(duration)
dayjs.extend(utc)
dayjs.extend(timezone)

export const calculateTimeLeft = (targetDate: string) => {
  const moscowTargetDate = dayjs(targetDate).tz('Europe/Moscow')
  const now = dayjs().tz('Europe/Moscow')

  if (moscowTargetDate.isBefore(now)) {
    return {
      totalDaysLeft: 0,
      hoursLeft: 0,
      minutesLeft: 0,
      secondsLeft: 0
    }
  }

  const diff = dayjs.duration(moscowTargetDate.diff(now))
  const totalDaysLeft = Math.floor(diff.asDays())
  const hoursLeft = diff.hours()
  const minutesLeft = diff.minutes()
  const secondsLeft = diff.seconds()

  return {
    totalDaysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft
  }
}
