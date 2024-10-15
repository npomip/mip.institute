import stls from '@/styles/components/sections/Seminars.module.sass'
import React from 'react'
import SlugCard from '../cards/SlugCard'

const SlugTags = ({ props, slug }) => {
  const title = slug === 'journal' ? 'Все статьи' : 'Все семинары'

  return (
    <>
      <div className={stls.seminarsContainer}>
        {/* первый слайд на всю ширину */}
        <SlugCard item={props?.[0]} slug={slug} firstCard />
        <h2 className={stls.slugTitle}>{title}</h2>
        {props
          ?.filter((el, i) => i > 0)
          .map(item => (
            <SlugCard key={item.id} item={item} slug={slug} />
          ))}
      </div>
    </>
  )
}

export default SlugTags
