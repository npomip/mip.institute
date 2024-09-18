import stls from '@/styles/components/practicalTraining/StepBlocks.module.sass'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
const StepBlocks = ({
  fill,
  id
}) => {

  return (
    <div className={stls.stepBlock}>
      <span className={stls.number}>{id + 1}</span>
      <div className={stls.fill} style={{ height: `${fill}%` }} />
    </div>
  )
}

export default StepBlocks
