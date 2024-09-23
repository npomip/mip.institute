import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      {/* до {getNextFriday(new Date())} */}
      до{' '}
      {new Date() < new Date(2024, 8, 29)
        ? '28 сентября'
        : new Date() < new Date(2024, 9, 1)
        ? '30 сентября'
        : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil