import stls from '@/styles/components/filters/ResetFilter.module.sass'

interface ResetFilterProps {
  // className?: string;
  onClick?: () => void
  onIndex?: boolean
}
const ResetFilter = ({ onIndex = false, onClick }: ResetFilterProps) => {
  return (
    <div
      className={
        onIndex ? stls.resetFilterContainer : stls.resetFilterContainerMobile
      }>
      <p className={stls.resetFilter} onClick={onClick}>
        Сбросить фильтры х
      </p>
      <div className={stls.icon}>{/* <IconClose /> */}</div>
    </div>
  )
}

export default ResetFilter
