import stls from '@/styles/components/filters/FilterContainer.module.sass'

const FilterContainer = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default FilterContainer