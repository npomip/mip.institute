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
import list from '@/data/general/list'
import { discount } from '@/data/price'
import { sortBasedOnNumericOrder, sortReviewsCreatedAtASC } from '@/helpers/index'
import styles from '@/styles/pages/PagesProgram.module.sass'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import { TypeLibReviews } from '@/types/index'
import { useEffect, useRef } from 'react'
import ButtonToTop from '../sections/ButtonToTop'
import ProgramOverview from '../sections/ProgramOverview'
import RequestsCard from '../sections/RequestsCard'

interface Breadcrumb {
  label: string;
  path: string;
}

type PagesProgramType = {
  ofType: 'course' | 'profession',
  reviews: TypeLibReviews,
  programOverview: string,
  breadcrumbs: Breadcrumb[],
  slug:string
}

const PagesProgram = ({ ofType = null, reviews, programOverview, breadcrumbs, slug }: PagesProgramType) => {
  const processRef = useRef(null)
  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const resumeRef = useRef(null)
  const costRef = useRef(null)
  const reviewsRef = useRef(null)
  const faqRef = useRef(null)
  const requestRef = useRef(null)

  const handleScroll = () => {
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const subtitle = 
    <>
      <p className={stls.leftTitle}>
        Обучение осуществляется по заочной форме с применением
        дистанционных<span className={stls.star}>*</span> технологий. Лекции, общение, тестирование проходят
        в онлайн формате через образовательную платформу
      </p>
    </>

  const checkSlug = [
    'pedagog-psiholog',
    'nejropsiholog'
  ]

  
  return (
    <>
    <ButtonToTop />
      <HeroProgram breadcrumbs={breadcrumbs} />
      {/* <Opportunities /> */}
      {/* <Desc /> */}
      <PageNavigation 
      ofType={ofType}
      processRef={processRef} 
      diplomaRef={diplomaRef}
      planRef={planRef}
      teachersRef={teachersRef}
      resumeRef={resumeRef}
      costRef={costRef}
      reviewsRef={reviewsRef}
      requestRef={requestRef}
      faqRef={faqRef}/>
      {programOverview && <ProgramOverview />}
      {/* <WhatYouWillLearn title={'Чему вы научитесь'}  />
      <ForWhom /> */}
      
      {checkSlug.includes(slug) ? (
        <>
        
      <WhatYouWillLearn title={'Чему вы научитесь'}  />
      <ForWhom />
        </>
      ) : (
        <>
        <ForWhom />
      <WhatYouWillLearn title={'Чему вы научитесь'}  />
      </>
      )}
      <HowProcessGoes processRef={processRef} list={list} subtitle={subtitle} />
      <YourDiploma diplomaRef={diplomaRef} ofType={ofType} />
      <BriefProgramContents planRef={planRef} />
      <FullProgram />
      <Teachers teachersRef={teachersRef} title={'Преподаватели программы'} />
      {ofType !== 'course' && <YourResume resumeRef={resumeRef} />}
      <RequestsCard requestRef={requestRef} />
      
      
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      
      {/* <HelpWithEmployment /> */}
      {/* {ofType !== 'course' && <YourFutureJob />} */}
      <StudyCost costRef={costRef} />
      <Reviews reviewsRef={reviewsRef} reviews={reviewsSorted} />
      <Faq faqRef={faqRef}/>
    </>
  )
}

export default PagesProgram
