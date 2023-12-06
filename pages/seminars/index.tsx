import { GetStaticProps, NextPage } from 'next'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import Seminars from '@/components/sections/Seminars'
import { useRouter } from 'next/router'
import Wrapper from '@/components/layout/Wrapper'
import SeminarsFilter from '@/components/general/SeminarsFilter'
import { useState } from 'react'

const CoursesPage = ({ seminars }) => {
  // useHandleContextStaticProps({
  //   seminars,
  //   curProgramsType: 'course'
  // })
//   const titles = seminars.map(item => item.title);
// const studyFields = seminars.map(item => item.studyField);

// console.log(titles); // Массив всех значений title
// console.log(studyFields)

  return (
    <Wrapper>
      <h1>Семинары</h1>
      <SeminarsFilter seminars={seminars} />
      <Seminars seminars={seminars}/>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.seminars })

export default CoursesPage