import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      { new Date() < new Date(2024, 11, 1)
        ? '30 ноября'
        : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil