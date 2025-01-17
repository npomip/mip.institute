import stls from './StepBlocks.module.sass'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

interface StepBlocksProps {
  currentIndex: number
  onStepClick: (index: number) => void
}

const StepBlocks: React.FC<StepBlocksProps> = ({ currentIndex, onStepClick }) => {
  const [filledBlocks, setFilledBlocks] = useState<boolean[]>([true, false, false])

  useEffect(() => {
    setFilledBlocks(prev => {
      const newFilledBlocks = [...prev]
      for (let i = 0; i < newFilledBlocks.length; i++) {
        newFilledBlocks[i] = i <= currentIndex
      }
      return newFilledBlocks
    })
  }, [currentIndex])

  const blocks = [{ id: 0 }, { id: 1 }, { id: 2 }]
  return (
    <div className={stls.container}>
      {blocks.map(el => (
        <div
          key={el.id}
          className={classNames(stls.stepBlock, {
            [stls.active]: filledBlocks[el.id]
          })}
          onClick={() => onStepClick(el.id)}>
          <span
            className={classNames(stls.number, {
              [stls.completed]: filledBlocks[el.id]
            })}>
            {el.id + 1}
          </span>
          <div
            className={stls.fill}
            style={{
              height: `${filledBlocks[el.id] ? '100%' : '0%'}`,
              transition: 'height 0.8s linear'
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default React.memo(StepBlocks)
