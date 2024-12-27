import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {new Date() < new Date(2024,11,29)
        ? '28 декабря'
        : new Date() < new Date(2025,1,1)
        ? '31 декабря'
          : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
