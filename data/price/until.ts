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

let output
if (currentDay < 20) {
  output = months[currentMonth]
} else {
  currentMonth === 11
    ? (output = months[0])
    : (output = months[currentMonth + 1])
}

const until = currentDay < 20 ? 'до 20 ' + output : 'до 5 ' + output

export default until
