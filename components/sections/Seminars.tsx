import stls from '@/styles/components/sections/Seminars.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'
import SeminarCard from '../cards/SeminarCard'

type ReviewsType = {
  standalone?: boolean
  reviews: any,
  reviewsRef?: any,
  onMain?: boolean
}

const Seminars = ({ seminars }) => {
  // console.log(seminars)
  // const newDate = new Date(seminars.date)
  // console.log(newDate)
  return (
    <>
    <h2>Seminars:</h2>
    <div className={stls.seminarsContainer}>
      
        {seminars?.map(seminar => (
          // <div key={seminar.id} className={stls.seminarsContainer}>
            <SeminarCard key={seminar.id} seminar={seminar}/>
          // </div>
        ))}
    </div>
    </>
  )
}

export default Seminars
