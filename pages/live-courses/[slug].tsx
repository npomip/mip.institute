import PaymentForm from '@/components/forms/PaymentForm'
import GeneralFaq from '@/components/sections/liveCourses/GeneralFaq'
import LifeCourseDynamicZones from '@/components/sections/liveCourses/LifeCoursesDynamicZones'
import LiveCoursesForm from '@/components/sections/liveCourses/LiveCoursesForm'
import LiveCoursesGetAcess from '@/components/sections/liveCourses/LiveCoursesGetAcess'
import LiveCoursesHero from '@/components/sections/liveCourses/LiveCoursesHero'
import LiveCoursesStripe from '@/components/sections/liveCourses/LiveCoursesStripe'
import { About, Reviews } from '@/components/sections'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import CloudPaymentForm from '@/components/forms/CloudPayments'
import Wrapper from '@/ui/Wrapper'

const JournalPage = ({ lifeCourse, reviews }) => {
  const [isTestOpen, setIsTestOpen] = useState(false)

  const handleOpen = () => {
    setIsTestOpen(true)
  }

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      
      <LiveCoursesHero title={lifeCourse?.title} openModal={handleOpen} />
      <Wrapper>
      <CloudPaymentForm />

      </Wrapper>
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
