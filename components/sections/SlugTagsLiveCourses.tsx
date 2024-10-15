import { useFilteredItems } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/Seminars.module.sass'
import React from 'react'
import SlugCard from '../cards/SlugCard'

type ReviewsType = {
  slug: string
}

const SlugTagsLiveCourses = ({ slug }: ReviewsType) => {
  const filteredItems = useFilteredItems()
  return (
    <>
      <div className={stls.journalContainer}>
        {filteredItems?.map((item, idx) => (
          <React.Fragment key={idx}>
            {item?.title && (
              <SlugCard isLifeCourses={true} item={item} slug={slug} />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default SlugTagsLiveCourses
