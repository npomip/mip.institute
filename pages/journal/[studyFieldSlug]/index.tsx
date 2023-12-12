import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import Wrapper from '@/components/layout/Wrapper'
import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import Seminars from '@/components/sections/Seminars'
import { useRouter } from 'next/router'
import SeminarCard from '@/components/sections/Seminars'

const JournalStudyFieldPage = ({
  blogs
}) => {
  const router = useRouter();
  const { studyFieldSlug } = router.query;
  // console.log(seminars)

  // Фильтрация семинаров по studyFieldSlug
  const filteredSeminars = blogs?.filter((seminar) => seminar.studyFieldSlug === studyFieldSlug);
  return (
    <>
      <Wrapper>
        <h1>Журнал слаг</h1>
      <StudyFieldSlugFilter props={blogs} slug='journal' />
      <SeminarCard seminars={filteredSeminars}/>
    </Wrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.journals })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journals })

export default JournalStudyFieldPage