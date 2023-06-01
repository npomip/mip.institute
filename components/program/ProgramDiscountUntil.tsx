import { calculateClosestAdmission, getRuMonths } from '@/helpers/index'
import ProgramAdmission from '@/components/program/ProgramAdmission'

const ProgramDiscountUntil = () => {
  // const currentDate = new Date()
  // const currentDay = currentDate.getDate()
  // const currentMonth = currentDate.getMonth()
  // const months = getRuMonths()
  // const day = currentDay < 20 ? '20' : '5'

  // let output
  // if (currentDay < 20) {
  //   output = `${day} ${months[currentMonth]}`
  // } else {
  //   currentMonth === 11
  //     ? (output = `${day} ${months[0]}`)
  //     : (output = `${day} ${months[currentMonth + 1]}`)
  // }

  // const until = `до ${output}`
  // return <>до 31 января</>
  // return <>до {calculateClosestAdmission()}</>
  return (
    <>
      {/* до <ProgramAdmission /> */}
      до 7 июня
    </>
  )
}

export default ProgramDiscountUntil
