import { useContext } from 'react'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import ProgramContext from '@/context/program/programContext'
import ProgramsContext from '@/context/programs/programsContext'
import {
  HeroProgram,
  Opportunities,
  Desc,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq
} from '@/components/sections'
import { discount } from '@/data/price'

type PagesProgramType = {
  ofType: 'course' | 'profession'
}

const PagesProgram = ({ ofType = null }: PagesProgramType) => {
  const { program } = useContext(ProgramContext)
  const { curProgramsStudyFieldSlug } = useContext(ProgramsContext)

  console.log(program)
  const seoParams = {
    title: `${program?.title} | ${program?.typeLabel || 'Курс'} | ${
      company.name
    }`,
    programTitle: program?.title || 'Программа',
    desc: truncate(program.description, 120),
    canonical: `${routes.front.root}${
      ofType === 'course'
        ? routes.front.courses
        : ofType === 'profession'
        ? routes.front.professions
        : routes.front.professions
    }/${curProgramsStudyFieldSlug}/${program.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        providerName={company.name}
        providerUrl={seoParams.canonical}
      />
      <HeroProgram />
      {/* <Opportunities /> */}
      {/* <Desc /> */}
      <WhatYouWillLearn />
      <ForWhom />
      <HowProcessGoes />
      <YourDiploma ofType={ofType} />
      <BriefProgramContents />
      <FullProgram />
      {ofType !== 'course' && <YourResume />}
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      <Teachers />
      {/* <HelpWithEmployment /> */}
      {ofType !== 'course' && <YourFutureJob />}
      <StudyCost />
      <Faq />
    </>
  )
}

export default PagesProgram
