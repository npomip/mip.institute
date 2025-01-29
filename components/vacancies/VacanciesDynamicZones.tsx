import QuoteWithTitleSelector from './QuoteWithTitleSelector'
import SliderWithImg from './SliderWithImg/SliderWithImg'
import Recruitment from '@/components/sections/Vacancies/Recruitment/Recruitment'
import VacanciesVideo from '@/components/sections/Vacancies/VacanciesVideo/VacanciesVideo'

export default function VacanciesDynamicZones({ props }) {
  console.log('----', { props })
  switch (props.__component) {
    case 'vacancies.repeatable-quote-with-title':
      return <QuoteWithTitleSelector props={props} />
    case 'vacancies.slider-with-img':
      return <SliderWithImg props={props} />
    case 'shared.rich-text':
      console.log(props)
      return <p>{props.body}</p>
    case 'vacancies.slider-with-image':
      return <p>{props.title}</p>
    case 'vacancies.recruitment':
      return <Recruitment props={props} />
    case 'shared.text-with-icon':
      return <VacanciesVideo props={props} />
    case 'shared.rich-text-with-img':
      return <p>Будем рады видеть вас в нашей команде МИП блок</p>
    default:
      break
  }
}
