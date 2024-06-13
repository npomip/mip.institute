import React from 'react'
import { useFilterDispatch } from '@/context/FilterContext/FilterContext'
import ResetFilter from './ResetFilter'

interface WrapperProps {
  // className?: string;
  onClick?: () => void
  onIndex?: boolean
}
const ResetWrapper = ({ onIndex = false, onClick }: WrapperProps) => {
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
    <>
      <ResetFilter onClick={removeFilters} onIndex />
    </>
  )
}

export default ResetWrapper