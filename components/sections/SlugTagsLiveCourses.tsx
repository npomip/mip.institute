import { useFilter, useFilteredItems } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/Seminars.module.sass'
import React from 'react'
import SlugCard from '../cards/SlugCard'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
}

const SlugTagsLiveCourses = ({ slug, withDate = false }) => {

  const filteredItems = useFilteredItems();
  return (
    <>
      <div className={stls.journalContainer}>
      {filteredItems?.map((item, idx) => (
        <React.Fragment key={idx}>
        {item?.title && 
        <SlugCard isLifeCourses={true}  item={item} slug={slug} withDate={withDate} />
        }
        </React.Fragment>
      ))}
      </div>      
    </>
  )
}

export default SlugTagsLiveCourses
