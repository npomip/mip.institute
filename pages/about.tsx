import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeAbout } from '@/data/routes'
import companyName from '@/data/companyName'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import About from '@/components/sections/About'

const AboutPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Об институте | ${companyName}`}
        description={truncate(
          `Московский Институт Психологии за современный подход в образовании. Мы постоянно берем обратную связь от работодателей и каждый месяц адаптируем учебные программы. Это в 12 раз быстрее обновления программы обучения в государственном ВУЗе!`,
          120
        )}
        canonical={`${routes.front.root}${routeAbout}`}
      />
      <About standalone />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.about })

export default AboutPage
