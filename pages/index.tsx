import {
  About,
  Cta,
  Faq,
  Hero,
  HowProcessGoes,
  Reviews,
  Teachers,
  WhatYouWillLearn,
  WhyBother,
  YourDiploma
} from '@/components/sections'
import ButtonToTop from '@/components/sections/ButtonToTop'
import Directions from '@/components/sections/Directions'
import EntryForm from '@/components/sections/EntryForm'
import TopCourses from '@/components/sections/TopCourses'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, prod, routes } from '@/config/index'
import mainList from '@/data/general/mainList'
import {
  sortBasedOnNumericOrder,
  sortReviewsCreatedAtASC
} from '@/helpers/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'

const HomePage: NextPage<TypePageHomeProps> = ({
  programs,
  reviews,
  teachers
}) => {
  useHandleContextStaticProps({ programs })

  const teachersFromMain = teachers?.filter(teacher => {
    const allowedNames = [
      'Косина Алла Александровна',
      'Гиль Людмила Владимировна',
      'Шавырина Анна Алексеевна',
      'Перемолотова Ирина Александровна',
      'Катасонова Юлия Викторовна',
      'Волкова Анастасия Михайловна'
    ]

    return allowedNames.includes(teacher.name)
  })

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const seoParams = {
    title: `МИП - Московский Институт Психологии`,
    desc: truncate(
      'MIP - Психологический онлайн институт. Получи дистанционное образование со скидкой 30% Дипломы ФРДО. Удобный формат обучения! Актуальный материал с упором на практику.',
      120
    ),
    canonical: routes.front.root
  }

  const subtitle = (
    <>
      <p className={stls.leftTitle}>
        Обучение в МИП осуществляется по заочной форме с применением
        дистанционных<span className={stls.star}>*</span> технологий. Лекции,
        общение, тестирование проходят в онлайн-формате через образовательную
        платформу. Вы получите научную базу по главным психологическим
        дисциплинам и практический опыт в работе с задачами по реальным кейсам.
        Узнаете, как терапия помогает решить внутриличностные проблемы и выйти
        из стрессовых ситуаций без потерь.
      </p>
    </>
  )

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={prod ? false : true}
        noindex={prod ? false : true}
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
      <Directions />
      <TopCourses />
      <ButtonToTop />
      <WhyBother />
      <About />
      {/* <div className="i-flocktory" data-fl-action="exchange" data-fl-user-email="xname@flocktory.com"></div> */}
      <HowProcessGoes onMain subtitle={subtitle} list={mainList} />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />
      <WhatYouWillLearn title={'Чему вы научитесь в МИП?'} onMain />
      <Teachers
        onMain
        title={'Преподаватели – наставники'}
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma onMain ofType='profession' />
      <Reviews onMain reviews={reviewsSorted} />
      <EntryForm />
      <Faq />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.home })

export default HomePage
