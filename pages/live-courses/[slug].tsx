// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import PaymentForm from '@/components/forms/PaymentForm'
import payment from '@/components/funcs/payment'
import GeneralFaq from '@/components/general/GeneralFaq'
import Wrapper from '@/components/layout/Wrapper'
import LifeCourseDynamicZones from '@/components/liveCourses/LifeCoursesDynamicZones'
import LiveCoursesForm from '@/components/liveCourses/LiveCoursesForm'
import LiveCoursesGetAcess from '@/components/liveCourses/LiveCoursesGetAcess'
import LiveCoursesHero from '@/components/liveCourses/LiveCoursesHero'
import LiveCoursesStripe from '@/components/liveCourses/LiveCoursesStripe'
import { About, Faq, Reviews } from '@/components/sections'
import EntryForm from '@/components/sections/EntryForm'
import YouTubeVideo from '@/components/sections/YouTubeVideo'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React, { useState } from 'react'
import Popup from 'reactjs-popup'

const JournalPage = ({ lifeCourse, reviews }) => {
  // const { reviews } = useContext(ContextStaticProps)

  // const reviewsSorted = sortBasedOnNumericOrder({
  //   reviews: sortReviewsCreatedAtASC({ reviews })
  // })

  // const router = useRouter()

  // if(prod && !preview){
  // blogs = blogs?.filter(el => el.previewOnly === false)
  // }
  // const [selectedField, setSelectedField] = useState({
  //   studyFieldSlug: router.query.studyFieldSlug || '',
  //   studyField: router.query.studyField || 'Все cтатьи'
  // })

  // useEffect(() => {
  //   setSelectedField({studyFieldSlug: localStorage.getItem('selectedFieldSlug') || '',
  //   studyField: localStorage.getItem('selectedField') || 'Все cтатьи'
  // })

  // }, [selectedField.studyField])

  // const blogsFilter = selectedField.studyField == 'Все cтатьи' ? blogs : blogs.filter(el => el.studyFieldSlug === selectedField.studyFieldSlug)

  // const paymentClick = async () => {
  //   const resp = await payment()
  // }

  const [isTestOpen, setIsTestOpen] = useState(false)

  const handleOpen = () => {
    setIsTestOpen(true)
  }

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <LiveCoursesHero title={lifeCourse?.title} openModal={handleOpen} />
      {close => (
        <Popup
          open={isTestOpen}
          onClose={() => setIsTestOpen(false)}
          position={'center center'}>
          <PaymentForm program={lifeCourse} onClose={close} />
        </Popup>
      )}
      <LiveCoursesStripe />
      {lifeCourse?.article?.map((module, idx) => (
        <React.Fragment key={idx}>
          <LifeCourseDynamicZones props={module} openModal={handleOpen} />
        </React.Fragment>
      ))}
      <LiveCoursesGetAcess marginBottom={60} openModal={handleOpen} />
      <About isLiveCourse />
      <Reviews
        subtitle={lifeCourse?.review_subtitle}
        reviews={lifeCourse?.unique_reviews}
        isLiveCourse
      />
      <LiveCoursesForm program={lifeCourse} />
      <GeneralFaq qnas={lifeCourse?.qnas} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.liveCourse })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.liveCourse })

export default JournalPage
