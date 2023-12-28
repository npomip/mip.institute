import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import Wrapper from '@/components/layout/Wrapper'
import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import { useRouter } from 'next/router'
import SlugTags from '@/components/sections/SlugTags'
import SeoPagesJournal from '@/components/seo/SeoPageJournal'
import stls from '@/styles/pages/JournalSlug.module.sass'

const JournalStudyFieldPage = ({
  blogs
}) => {
  const router = useRouter();
  const { studyFieldSlug } = router.query;
  // console.log(seminars)

  // Фильтрация семинаров по studyFieldSlug
  const filteredSeminars = blogs?.filter((seminar) => seminar.studyFieldSlug === studyFieldSlug);
  const sortedBlogs = [...filteredSeminars].sort((a, b) => {
    // Предположим, что a.date и b.date содержат строки с датами
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Сортировка от самой поздней даты к более ранней
  });
  return (
    <>
      <Wrapper>
        <SeoPagesJournal />
        <h1 className={stls.title}>Блог МИП</h1>
      <StudyFieldSlugFilter props={blogs} slug='journal' />
      <SlugTags props={sortedBlogs} slug = 'journal'/>
    </Wrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.journals })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journals })

export default JournalStudyFieldPage