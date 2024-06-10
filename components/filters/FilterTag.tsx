import stls from '@/styles/components/filters/FilterTag.module.sass'
import classNames from 'classnames'

interface FilterTagProps {
  children: string
  onClick?: () => void
  isActive: boolean
  isCategories?: boolean
  isProgram?: boolean
}
const FilterTag = ({
  children,
  onClick,
  isActive,
  isCategories = false,
  isProgram = false
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
    </span>
  )
}

export default FilterTag
