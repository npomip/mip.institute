import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps, TypePageSeminarsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import Seminars from '@/components/sections/Seminars'

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
    <>
        <Seminars seminars={seminars}/>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.seminars })

export default CoursesPage