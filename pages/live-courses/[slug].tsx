// import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import payment from '@/components/funcs/payment'
import LifeCourseDynamicZones from '@/components/liveCourses/LifeCoursesDynamicZones'
import LiveCoursesDescription from '@/components/liveCourses/LiveCoursesDescription'
import LiveCoursesHero from '@/components/liveCourses/LiveCoursesHero'
import LiveCoursesStripe from '@/components/liveCourses/LiveCoursesStripe'
import { About, Reviews } from '@/components/sections'
import EntryForm from '@/components/sections/EntryForm'
import YouTubeVideo from '@/components/sections/YouTubeVideo'
// import SeoPagesJournals from '@/components/seo/SeoPageJournals'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

const JournalPage = ({ lifeCourse, reviews }) => {
  console.log(lifeCourse);
  
  // const { reviews } = useContext(ContextStaticProps)

  // const reviewsSorted = sortBasedOnNumericOrder({
  //   reviews: sortReviewsCreatedAtASC({ reviews })
  // })
  // console.log(lifeCourse)

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

  const paymentClick = async () => {
    const resp = await payment()
  }

  return (
    // <Wrapper>
    <>
      <NextSeo nofollow={true} noindex={true} />
      <LiveCoursesHero title={lifeCourse.title} />
      <LiveCoursesStripe />
      {lifeCourse?.article?.map((module, idx) => (
        <React.Fragment key={idx}>
          <LifeCourseDynamicZones props={module} />
          {idx === 1 && (
            <YouTubeVideo
              videoId='Voc_dKGqhFE'
              title='Демо-ролик спикера курса'
            />
          )}
          {idx === 2 && (
            <LiveCoursesDescription title='Краткая программа курса:' />
          )}
        </React.Fragment>
      ))}

      <About isLiveCourse />
      <Reviews reviews={reviews} isLiveCourse />
      <EntryForm isLiveCourse />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.liveCourse })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.liveCourse })

export default JournalPage
