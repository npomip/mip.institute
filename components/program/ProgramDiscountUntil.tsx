import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  // console.log(new Date(2024, 7, 21));
  
  return (
    <>
      {/* до {getNextFriday(new Date())} */}
      до {new Date()  < new Date(2024, 7, 24)  ? '23 августа' :  new Date()  < new Date(2024, 7, 29) ? '28 августа': new Date()  < new Date(2024, 8, 1) ? '31 августа': getNextFriday(new Date()) }
    </>
  )
}

export default ProgramDiscountUntil
