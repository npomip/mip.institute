import React from 'react'
import stls from './CustomPrevButton.module.sass'
import IconPrevButton from '@/components/icons/IconPrevButton'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

interface Props {
  reviewPrevBtn?: boolean
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

const CustomPrevButton = ({
  reviewPrevBtn = false,
  happyStudents = false,
  isTeacherRoundBtn = false,
  left = 0,
  top = 0,
  showOnMobile = false,
  mobileTop = 0,
  mobileLeft = 0,
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
        [stls.containerPrev]: true,
        [stls.reviewPrevBtn]: reviewPrevBtn,
        [stls.happyStudentsPrevBtn]: happyStudents,
        [stls.teachersPrevBtn]: isTeacherRoundBtn,
        [stls.liveCourses]: isLiveCourse,
        [stls.squareBtn]: isSquareBtn
      })}>
      <button className='custom-prev-button' aria-label='Предыдущий слайд'>
        <IconPrevButton isSquareBtn={isSquareBtn} />
      </button>
    </div>
  )
}

export default CustomPrevButton
