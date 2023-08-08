// import { useContext } from 'react'
// import { NextSeo, CourseJsonLd } from 'next-seo'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
import {
  HeroProgram,
  Opportunities,
  Desc,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq,
  PageNavigation,
  Reviews,
} from '@/components/sections'
import { discount } from '@/data/price'
import styles from '@/styles/pages/PagesProgram.module.sass'
import { TypeLibReviews } from '@/types/index'
import { useEffect, useRef } from 'react'
import RequestsCard from '../sections/RequestsCard'

type PagesProgramType = {
  ofType: 'course' | 'profession',
  reviews: TypeLibReviews
}

const PagesProgram = ({ ofType = null, reviews }: PagesProgramType) => {
  console.log(reviews, 'reviews in pages')
  const processRef = useRef(null)
  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const costRef = useRef(null)
  const reviewsRef = useRef(null)
// console.log(currRef.current.getBoundingClientRect().y)
  // const navTop = navigationRef.current.getBoundingClientRect().y;
  const handleScroll = () => {
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // console.log(processRef.current.getBoundingClientRect().y)
  return (
    <>
      <HeroProgram />
      {/* <Opportunities /> */}
      {/* <Desc /> */}
      <PageNavigation processRef={processRef} diplomaRef={diplomaRef}
      planRef={planRef}
      teachersRef={teachersRef}
      costRef={costRef}
      reviewsRef={reviewsRef}/>
      <WhatYouWillLearn  />
      <ForWhom />
      <HowProcessGoes processRef={processRef} />
      <YourDiploma diplomaRef={diplomaRef} ofType={ofType} />
      <BriefProgramContents planRef={planRef} />
      <FullProgram />
      <Teachers teachersRef={teachersRef} />
      {ofType !== 'course' && <YourResume />}
      <RequestsCard />
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      
      {/* <HelpWithEmployment /> */}
      {ofType !== 'course' && <YourFutureJob />}
      <StudyCost costRef={costRef} />
      <Reviews reviewsRef={reviewsRef} reviews={reviews} />
      <Faq />
    </>
  )
}

export default PagesProgram
