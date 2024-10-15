import React from 'react'
import stls from '../CustomPrevButton/CustomPrevButton.module.sass'
import IconNextButton from '@/components/icons/IconNextButton'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

interface Props {
  reviewNextBtn?: boolean
  happyStudents?: boolean
  isTeacherRoundBtn?: boolean
  showOnMobile?: boolean
  isLiveCourse?: boolean
  top?: number
  left?: number
  mobileLeft?: number
  mobileTop?: number
  isSquareBtn?: boolean
}

const CustomNextButton = ({
  reviewNextBtn = false,
  happyStudents = false,
  isTeacherRoundBtn = false,
  left = 0,
  top = 0,
  mobileTop = 0,
  mobileLeft = 0,
  showOnMobile = false,
  isLiveCourse = false,
  isSquareBtn
}: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div
      style={{
        transform: `translate(${
          isMobileAndTabletLayout ? mobileLeft : left
        }px, ${isMobileAndTabletLayout ? mobileTop : top}px)`,
        opacity: isMobileAndTabletLayout && !showOnMobile ? 0 : 1
      }}
      className={classNames({
        [stls.containerNext]: true,
        [stls.reviewNextBtn]: reviewNextBtn,
        [stls.happyStudentsNextBtn]: happyStudents,
        [stls.teachersNextBtn]: isTeacherRoundBtn,
        [stls.liveCourses]: isLiveCourse,
        [stls.squareBtn]: isSquareBtn
      })}>
      <button className='custom-next-button'>
        <IconNextButton isSquareBtn={isSquareBtn} />
      </button>
    </div>
  )
}

export default CustomNextButton
