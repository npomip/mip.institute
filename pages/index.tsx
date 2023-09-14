import { GetStaticProps, NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import {
  sortBasedOnNumericOrder,
  sortReviewsCreatedAtASC
} from '@/helpers/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import {
  WhyBother,
  About,
  HowProcessGoes,
  Cta,
  Reviews,
  Programs,
  Hero,
  WhatYouWillLearn,
  Teachers,
  YourDiploma,
  Faq
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'
import mainList from '@/data/general/mainList'
import CommonAboutSlider from '@/components/sections/AboutSlider/CommonAboutSlider'
import CreateApplication from '@/components/sections/CreateApplication'
import Directions from '@/components/sections/Directions'

const HomePage: NextPage<TypePageHomeProps> = ({ programs, reviews, teachers }) => {
  useHandleContextStaticProps({ programs })

  // console.log(teachers)
  const teachersFromMain = teachers.filter(teacher => {
    const allowedNames = [
      'Косина Алла Александровна',
      'Гиль Людмила Владимировна',
      'Шавырина Анна Алексеевна',
      'Перемолотова Ирина Александровна',
      'Катасонова Юлия Викторовна',
      'Волкова Анастасия Михайловна',
      
    ];
  
    return allowedNames.includes(teacher.name);
  });

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const seoParams = {
    title: `${company.name} | ${company.desc} | ${company.tagline}
    `,
    desc: truncate(
      'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
      120
    ),
    canonical: routes.front.root
  }

  const subtitle = 
    <>
      <p className={stls.leftTitle}>
      Обучение в МИП осуществляется по заочной форме с применением дистанционных<span className={stls.star}>*</span> технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу. Вы получите научную базу по главным психологическим дисциплинам и практический опыт в работе с задачами по реальным кейсам. Узнаете, как терапия помогает решить внутриличностные проблемы и выйти из стрессовых ситуаций без потерь. 
      </p>
    </>

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
      <SeoOrganizationJsonLd />
      <Hero />
      <Programs withTitle withBtn max={8} onMain />
      <Directions />
      <WhyBother />
      {/* <CommonAboutSlider /> */}
      <About />
      <HowProcessGoes onMain subtitle={subtitle} list={mainList} />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />
      <WhatYouWillLearn title={'Чему вы научитесь в МИП?'} onMain />
      <Teachers onMain title={'Преподаватели – наставники'} teachersFromMain={teachersFromMain} />
      <YourDiploma onMain ofType='profession'/>
      <Reviews onMain reviews={reviewsSorted} />
      <CreateApplication />
      <Faq />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.home })

export default HomePage
