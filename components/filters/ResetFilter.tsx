import React from 'react'
import stls from '@/styles/components/filters/ResetFilter.module.sass'
import { useFilterDispatch } from '@/context/FilterContext/FilterContext'
import { useRouter } from 'next/router'

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
