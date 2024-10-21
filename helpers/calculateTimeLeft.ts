import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export const calculateTimeLeft = (targetDate: string) => {
  const endDate = dayjs(targetDate)
  const now = dayjs()

  if (endDate.isBefore(now)) {
    return {
      totalDaysLeft: 0,
      hoursLeft: 0,
      minutesLeft: 0,
      secondsLeft: 0
    }
  }

  const diff = dayjs.duration(endDate.diff(now))
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