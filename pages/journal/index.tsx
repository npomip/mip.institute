import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoPagesPrograms } from '@/components/seo'
import PagesJournal from '@/components/pages/PagesJournal'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import Image from 'next/image'
import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'

const JournalPage = ({ blogs }) => {
  // useHandleContextStaticProps({
  //   blogs,
  // })
  // const articles = blogs?.map((el, index) => el)
  console.log(blogs)
  return (
    <>
      {/* <SeoPagesPrograms programs={programs} ofType='course' /> */}
      {/* {articles.map((el,index) => (
        <>
        
        <p key={index}>{el.title}</p>
        <div>{el?.article?.map((el,i) => (
          <>
          {el?.image?.url && <Image height={200} width='300' src={el?.image?.url} alt='asd'/>}
          <p key={i}>{el?.title ? el.title : el.text}</p>
          </>
        ))}</div>
        
        </>
      ))} */}
      <StudyFieldSlugFilter props={blogs} slug='journal' />
      {/* <PagesJournal /> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journals })

export default JournalPage