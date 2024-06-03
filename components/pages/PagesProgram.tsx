import {
  BriefProgramContents,
  Cta,
  Faq,
  ForWhom,
  FullProgram,
  HeroProgram,
  HowProcessGoes,
  PageNavigation,
  Reviews,
  StudyCost,
  Teachers,
  WhatYouWillLearn,
  WhyBother,
  YourDiploma,
  YourResume
} from '@/components/sections'
import list from '@/data/general/list'
import listOnCourses from '@/data/general/listOnCourses'
import { discount } from '@/data/price'
import {
  sortBasedOnNumericOrder,
  sortReviewsCreatedAtASC
} from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { TypeLibReviews } from '@/types/index'
import { useRef, useState } from 'react'
import ButtonToTop from '../sections/ButtonToTop'
import DistanceEducation from '../sections/DistanceEducation'
import EducationProcess from '../sections/EducationProcess'
import ProgramOverview from '../sections/ProgramOverview'
import RequestsCard from '../sections/RequestsCard'
import SalaryCounter from '../sections/SalaryCounter'

interface Breadcrumb {
  label: string
  path: string
}

type PagesProgramType = {
  ofType: 'course' | 'profession'
  reviews: TypeLibReviews
  programOverview: string
  breadcrumbs: Breadcrumb[]
  slug: string
}

const PagesProgram = ({
  ofType = null,
  reviews,
  programOverview,
  breadcrumbs,
  slug
}: PagesProgramType) => {
  const processRef = useRef(null)
  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const resumeRef = useRef(null)
  const costRef = useRef(null)
  const reviewsRef = useRef(null)
  const faqRef = useRef(null)

  const [showDescription, setShowDescription] = useState(true)

  const toggleOverview = () => {
    setShowDescription(!showDescription)
  }

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const checkSlug = ['pedagog-psiholog', 'nejropsiholog']

  const isDesktopLayout = useBetterMediaQuery('(min-width: 769px)')

  return (
    <>
      <ButtonToTop />
      <HeroProgram breadcrumbs={breadcrumbs} />
      <PageNavigation
        ofType={ofType}
        processRef={processRef}
        diplomaRef={diplomaRef}
        planRef={planRef}
        teachersRef={teachersRef}
        resumeRef={resumeRef}
        costRef={costRef}
        reviewsRef={reviewsRef}
        faqRef={faqRef}
      />
      <WhyBother />
      {programOverview && (
        <ProgramOverview
          showDescription={showDescription}
          toggleOverview={toggleOverview}
        />
      )}

      {checkSlug.includes(slug) ? (
        <>
          <WhatYouWillLearn title={'Чему вы научитесь'} />
          <ForWhom />
        </>
      ) : (
        <>
          <ForWhom />
          <WhatYouWillLearn title={'Чему вы научитесь'} />
        </>
      )}
      <EducationProcess
        paddingTop={30}
        paddingBottom={0}
        paddingTopMobile={0}
        paddingBottomMobile={0}
      />
      <DistanceEducation paddingBottomMobile={20} />
      <YourDiploma diplomaRef={diplomaRef} ofType={ofType} />
      <BriefProgramContents planRef={planRef} />
      <FullProgram />
      <Teachers teachersRef={teachersRef} title={'Преподаватели программы'} />
      {ofType !== 'course' && <YourResume resumeRef={resumeRef} />}
      <SalaryCounter />
      <RequestsCard />

      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />

      <StudyCost costRef={costRef} />
      <Reviews reviewsRef={reviewsRef} reviews={reviewsSorted} />
      <Faq faqRef={faqRef} />
    </>
  )
}

export default PagesProgram
