import React from 'react'
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconPrevButton from '@/components/icons/IconPrevButton'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

interface Props {
  reviewPrevBtn?: boolean
  happyStudents?: boolean
  teachers?: boolean
  showOnMobile?: boolean
  isLiveCourse?: boolean
  top?: number
  left?: number
  mobileLeft?: number
  mobileTop?: number
}

const CustomPrevButton = ({
  reviewPrevBtn = false,
  happyStudents = false,
  teachers = false,
  left = 0,
  top = 0,
  showOnMobile = false,
  mobileTop = 0,
  mobileLeft = 0,
  isLiveCourse = false
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
        [stls.teachersPrevBtn]: teachers,
        [stls.liveCourses]: isLiveCourse
      })}>
      <button className='custom-prev-button'>
        <IconPrevButton />
      </button>
    </div>
  )
}

export default CustomPrevButton
