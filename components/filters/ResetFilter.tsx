import React from 'react'
import stls from '@/styles/components/filters/ResetFilter.module.sass'
import { useFilterDispatch } from '@/context/FilterContext/FilterContext'

interface ResetFilterProps {
  // className?: string;
  onClick?: () => void
  onIndex?: boolean
}
const ResetFilter = ({ onIndex = false, onClick }: ResetFilterProps) => {
  const dispatch = useFilterDispatch()

  const removeFilters = () => {
    dispatch({
      type: 'clearFilters'
    })
    dispatch({
      type: 'setBool',
      payload: true
    })
  }
  return (
    <div
      className={
        onIndex ? stls.resetFilterContainer : stls.resetFilterContainerMobile
      }>
      <p className={stls.resetFilter} onClick={removeFilters}>
        Сбросить фильтры
      </p>
      <div className={stls.icon}>{/* <IconClose /> */}</div>
    </div>
  )
}

export default ResetFilter
