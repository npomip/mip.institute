import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import Wrapper from '@/components/layout/Wrapper'
import SeminarsFilter from '@/components/general/SeminarsFilter'
import Seminars from '@/components/sections/Seminars'
import { useRouter } from 'next/router'
import { useState } from 'react'
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
        <h1>Семинары слаг</h1>
      <SeminarsFilter seminars={blogs} />
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