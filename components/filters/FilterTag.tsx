import stls from '@/styles/components/filters/FilterTag.module.sass'
import classNames from 'classnames'

interface FilterTagProps {
  children: any
  onClick?: () => void
  isActive: boolean
  isCategories?: boolean
  isProgram?: boolean
  quantity?: string
}
const FilterTag = ({
  children,
  onClick,
  isActive,
  isCategories = false,
  isProgram = false,
  quantity
}: FilterTagProps) => {
  return (
    <span
      onClick={onClick}
      className={classNames({
        [stls.container]: true,
        [stls.active]: isActive,
        [stls.category]: isCategories,
        [stls.program]: isProgram
      })}>
      {children}
      {<span className={stls.quantity}>{quantity}</span>}
    </span>
  )
}

export default FilterTag
