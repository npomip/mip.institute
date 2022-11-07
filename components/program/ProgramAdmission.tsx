const ProgramAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]

  const lastDayOfCurMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  return <>18 ноября</>
  return (
    <>
      {currentDay < 5 ? '5' : currentDay >= 5 && currentDay < 20 ? '20' : '5'}{' '}
      {/* {currentDay < 20 ? '20' : '5'}{' '} */}
      {/* {currentDay < 20 ? '20' : lastDayOfCurMonth}{' '} */}
      {(() => {
        let output
        // output = months[currentMonth]
        if (currentDay < 20) {
          output = months[currentMonth]
        } else {
          currentMonth === 11
            ? (output = months[0])
            : (output = months[currentMonth + 1])
        }
        return output
      })()}
    </>
  )
}

export default ProgramAdmission
