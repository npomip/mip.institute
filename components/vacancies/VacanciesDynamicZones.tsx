import OurGraduates from './OurGraduates/OurGraduates'
import QuoteWithTitleSelector from './QuoteWithTitleSelector'
import SliderWithImg from './SliderWithImg/SliderWithImg'

export default function VacanciesDynamicZones({ props }) {
  console.log(props)

  switch (props.__component) {
    case 'vacancies.repeatable-quote-with-title':
      return <QuoteWithTitleSelector props={props} />
    case 'vacancies.slider-with-img':
      return <SliderWithImg props={props} />
    case 'shared.rich-text':
      return <OurGraduates props={props} />
    case 'vacancies.slider-with-image':
      return <p>{props.title}</p>
    case 'vacancies.recruitment':
      return <p>{props.title}</p>
    case 'shared.text-with-icon':
      return <p>{props.text}</p>
    case 'shared.rich-text-with-img':
      return <p>Будем рады видеть вас в нашей команде МИП блок</p>
    default:
      break
  }
}
