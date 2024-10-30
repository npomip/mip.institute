import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      {/* до {getNextFriday(new Date())} */}
      до{' '}
      { new Date() < new Date(2024, 10, 1)
        ? '31 октября'
        : new Date() < new Date(2024, 10, 3)
        ? '2 ноября'
        : new Date() < new Date(2024, 10, 9)
        ? '8 ноября'
        : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil