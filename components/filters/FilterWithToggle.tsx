import stls from '@/styles/components/filters/FilterWithToggle.module.sass'
import ToggleBtn from '../btns/ToggleBtn'

const FilterWithToggle = ({ onChange, description }) => {
  return (
    <div className={stls.container}>
    <p className={stls.description}>{description}</p>
    <ToggleBtn onChange={onChange} />
    </div>
    )
}

export default FilterWithToggle