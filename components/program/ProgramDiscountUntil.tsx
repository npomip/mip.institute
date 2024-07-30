import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      {/* до {getNextFriday(new Date())} */}
      до {new Date()  > new Date(2024, 7, 1)  ? getNextFriday(new Date()) : '31 июля' }
    </>
  )
}

export default ProgramDiscountUntil
