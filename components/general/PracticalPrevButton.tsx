import React from 'react'
import stls from '@/styles/components/general/PracticalNextButton.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import IconNextButtonPractical from '../icons/IconPrevButtonPractical'

interface Props {
  showOnMobile?: boolean
  top?: number
  left?: number
  mobileLeft?: number
  mobileTop?: number
  programPrevButton?: boolean
}

const PracticalPrevButton = ({
  left = 0,
  top = 0,
  mobileTop = 0,
  mobileLeft = 0,
  showOnMobile = false,
  programPrevButton = false
}: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div
      style={{
        transform: `translate(${
          isMobileAndTabletLayout ? mobileLeft : left
        }px, ${isMobileAndTabletLayout ? mobileTop : top}px) scaleX(-1)`,
        opacity: isMobileAndTabletLayout && !showOnMobile ? 0 : 1
      }}
      className={classNames({
        [stls.containerPrev]: true,
        [stls.programPrevButton]: programPrevButton,
      })}>
      <button className='custom-prev-button'>
        <IconNextButtonPractical />
      </button>
    </div>
  )
}

export default PracticalPrevButton
