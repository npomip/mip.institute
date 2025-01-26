import Benefits from '../sections/Vacancies/Benefits/Benefits'
import Values from '../sections/Vacancies/Values/Values'

export default function QuoteWithTitleSelector({ props }) {

  switch (props.title) {
    case "Преимущества":
      return <Benefits props={props} />
    case "Наши ценности":
      return <Values props={props} />
    case 'Как стать частью команды МИП?':
      return <p>Вставить блок Как стать частью команды МИП?</p>


    default:
      break
  }
}
