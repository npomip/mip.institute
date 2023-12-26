import { GetStaticProps, NextPage } from 'next'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoPagesPrograms } from '@/components/seo'
import PagesJournal from '@/components/pages/PagesJournal'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import Image from 'next/image'
import stls from '@/styles/pages/JournalSlug.module.sass'
import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import SlugTags from '@/components/sections/SlugTags'
import Wrapper from '@/components/layout/Wrapper'

const JournalPage = ({ blogs }) => {
  // useHandleContextStaticProps({
  //   blogs,
  // })
  // const articles = blogs?.map((el, index) => el)
  // console.log(blogs)
  const sortedBlogs = [...blogs].sort((a, b) => {
    // Предположим, что a.date и b.date содержат строки с датами
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Сортировка от самой поздней даты к более ранней
  });
  console.log(sortedBlogs)
  return (
    <Wrapper>
      {/* <SeoPagesPrograms programs={programs} ofType='course' /> */}
      <h1 className={stls.title}>Блог МИП</h1>
      <StudyFieldSlugFilter props={blogs} slug='journal' />
      <SlugTags props={sortedBlogs} slug = 'journal'/>
      {/* <PagesJournal /> */}
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journals })

export default JournalPage