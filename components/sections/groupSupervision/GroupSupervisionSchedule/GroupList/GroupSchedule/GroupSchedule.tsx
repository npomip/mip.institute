import React from 'react'
import stls from '@/components/sections/groupSupervision/GroupSupervisionSchedule/GroupList/GroupSchedule/GroupSchedule.module.sass'
import {
  formatDateRange,
  getNextClassDay
} from 'constants/GroupSupervision/helpers'

interface IGroupProps {
  groupName: string
  dates: string[]
  time: string[]
}
const GroupSchedule: React.FC<IGroupProps> = ({ groupName, dates, time }) => {
  const dateRange = formatDateRange(dates)
  const nextClassDay = getNextClassDay(dates)
  const nextClassTime = time[0]

  return (
    <div className={stls.groupCard}>
      <p className={stls.scheduleItem}>
        <span className={stls.boldText}>{groupName}</span>
        <span>{dateRange}</span>
        <span>{`${nextClassDay}, ${nextClassTime}`}</span>
      </p>
    </div>
  )
}

export default GroupSchedule
