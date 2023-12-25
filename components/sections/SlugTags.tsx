import stls from '@/styles/components/sections/Seminars.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'
import SlugCard from '../cards/SlugCard'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
}

const SlugTags = ({ props, slug, withDate = false }) => {
  console.log(props)
  // const newDate = new Date(seminars.date)
  // console.log(newDate)
  const title = slug === 'journal' ? 'Все статьи' : 'Все семинары'
  return (
    <>
      <div className={stls.seminarsContainer}>
        {/* первый слайд на всю ширину */}
        <SlugCard item={props?.[0]} slug={slug} withDate={withDate} firstCard/>
        <h2>{title}</h2>
        {props?.filter((el,i) => i > 0).map(item => (
          // <div key={seminar.id} className={stls.seminarsContainer}>
          <SlugCard key={item.id} item={item} slug={slug} withDate={withDate} />
          // </div>
        ))}
      </div>
    </>
  )
}

export default SlugTags
