import stls from '@/styles/components/filters/FilterContainer.module.sass'

const FilterContainer = ({ children, ...otherProps }) => {
  return <div className={stls.container} {...otherProps}>{children}</div>
}

export default FilterContainer