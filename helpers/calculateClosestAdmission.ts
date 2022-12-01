import { getRuMonths } from '@/helpers/index'

const calculateClosestAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const months = getRuMonths()

  // const currendDayCondition = currentDay >= 5 && currentDay < 20
  const currendDayCondition = currentDay < 20

  // const day = currendDayCondition ? '20' : '5'
  const day = currentDay >= 5 && currendDayCondition ? '20' : '5'
  // {currentDay < 5 ? '5' : currentDay >= 5 && currendDayCondition ? '20' : '5'}{' '}
  // const lastDayOfCurMonth = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() + 1,
  //   0
  // ).getDate()
  // const until =
  // currendDayCondition ? `до 20 ${output}` : `до ${lastDayOfCurMonth} ${output}`

  let output
  if (currendDayCondition) {
    output = `${day} ${months[currentMonth]}`
  } else {
    currentMonth === 11
      ? (output = `${day} ${months[0]}`)
      : (output = `${day} ${months[currentMonth + 1]}`)
  }

  return output
}

export default calculateClosestAdmission
