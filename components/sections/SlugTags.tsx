import stls from '@/styles/components/sections/Seminars.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'
import SlugCard from '../cards/SlugCard'

type ReviewsType = {
  standalone?: boolean
  reviews: any,
  reviewsRef?: any,
  onMain?: boolean
}

const SlugTags = ({ props, slug, withDate=false }) => {
  console.log(props)
  // const newDate = new Date(seminars.date)
  // console.log(newDate)
  return (
    <>
    <h2>Seminars:</h2>
    <div className={stls.seminarsContainer}>
      
        {props?.map(item => (
          // <div key={seminar.id} className={stls.seminarsContainer}>
            <SlugCard key={item.id} item={item} slug={slug} withDate={withDate}/>
          // </div>
        ))}
    </div>
    </>
  )
}

export default SlugTags
