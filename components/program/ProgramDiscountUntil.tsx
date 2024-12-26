import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {new Date() < new Date(2024, 11, 28)
        ? '27 декабря'
        : new Date() < new Date(2025, 1, 16)
          ? '15 января'
          : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
