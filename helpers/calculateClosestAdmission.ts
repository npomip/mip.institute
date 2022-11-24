import { getRuMonths } from '@/helpers/index'

const calculateClosestAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const months = getRuMonths()
  const day = currentDay < 20 ? '20' : '5'
  // {currentDay < 5 ? '5' : currentDay >= 5 && currentDay < 20 ? '20' : '5'}{' '}
  // const lastDayOfCurMonth = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() + 1,
  //   0
  // ).getDate()
  // const until =
  // currentDay < 20 ? `до 20 ${output}` : `до ${lastDayOfCurMonth} ${output}`

  let output
  if (currentDay < 20) {
    output = `${day} ${months[currentMonth]}`
  } else {
    currentMonth === 11
      ? (output = `${day} ${months[0]}`)
      : (output = `${day} ${months[currentMonth + 1]}`)
  }

  return '30 ноября'
  return output
}

export default calculateClosestAdmission
