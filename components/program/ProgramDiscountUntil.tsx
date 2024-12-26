import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {new Date() < new Date(2024, 11, 21)
        ? '20 декабря'
        : new Date() < new Date(2024, 11, 26)
          ? '25 декабря'
          : new Date() < new Date(2024, 11, 29)
            ? '28 декабря'
            : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
