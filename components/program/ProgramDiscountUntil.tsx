import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      {/* до {getNextFriday(new Date())} */}
      до{' '}
      { new Date() < new Date(2024, 10, 1)
        ? '31 октября'
        : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil