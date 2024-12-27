import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {new Date() < new Date(2025,1,1)
        ? '31 декабря'
        : new Date() < new Date(2025, 1, 4)
          ? '3 января'
          : new Date() < new Date(2025, 1, 11)
          ? '10 января'
          : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
