import getNextWednesday from '@/helpers/getNextThursday'

const ProgramAdmissionUntil = () => {
  return (
    <>
      
      {
      new Date() < new Date(2024,11, 28)
        ? '27 декабря'
          : new Date() < new Date(2025, 1, 16)
          ? '15 января'
          : getNextWednesday(new Date())}
    </>
  )
}

export default ProgramAdmissionUntil
