import BachelorCarousel from '@/components/carousel/BachelorCarousel'
import PaymentForm from '@/components/forms/PaymentForm'
import { PopupCta } from '@/components/popups'
import {
  About,
  Cta,
  Faq,
  Hero,
  Reviews,
  Teachers,
  WhatYouWillLearn,
  WhyBother,
  YourDiploma
} from '@/components/sections'
import ButtonToTop from '@/components/sections/ButtonToTop'
import Companies from '@/components/sections/Companies'
import Directions from '@/components/sections/Directions'
import DistanceEducation from '@/components/sections/DistanceEducation'
import EducationProcess from '@/components/sections/EducationProcess'
import EntryForm from '@/components/sections/EntryForm'
import HappyStudents from '@/components/sections/HappyStudents'
import PayLater from '@/components/sections/PayLater'
import ProfessionalLeague from '@/components/sections/ProfessionalLeague'
import ProgramsOnMain from '@/components/sections/ProgramsOnMain'
import PsyTest from '@/components/sections/PsyTest'
import SalaryCounter from '@/components/sections/SalaryCounter'
import TopCourses from '@/components/sections/TopCourses'
import YouTubeVideo from '@/components/sections/YouTubeVideo'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import preview from '@/config/preview'
import {
  sortBasedOnNumericOrder,
  sortReviewsCreatedAtASC
} from '@/helpers/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import { TypePageHomeProps } from '@/types/index'
import allowedNames from 'constants/indexMain'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import truncate from 'truncate'

const HomePage: NextPage<TypePageHomeProps> = ({
  programs,
  reviews,
  teachers,
  bachelors
}) => {
  useHandleContextStaticProps({ programs })

  const teachersFromMain = teachers?.filter(teacher =>
    allowedNames.includes(teacher.name)
  )

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const seoParams = {
    title: `МИП - Московский Институт Психологии`,
    desc: truncate(
      'MIP - Психологический институт. Получите дистанционное образование со скидкой 30% Дипломы ФРДО. Удобный формат обучения! Актуальный материал с упором на практику.',
      120
    ),
    canonical: routes.front.root
  }

  const desc = (
    <>
      У Вас есть вопросы? Оставьте заявку! <br className={stls.phonetablet} /> И
      сотрудник приемной комиссии свяжется с вами, чтобы рассказать все
      подробности
    </>
  )

  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.utm_source === 'direct_link') {
      setOpen(true)
    }
  }, [router.query])

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={preview ? true : false}
        noindex={preview ? true : false}
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

      <Popup open={open} modal nested>
        {close => (
          <PopupCta
            title='Задать вопрос'
            desc={desc}
            cta='Задать вопрос'
            question
            close={close}
            blockForAmo='Переход по ссылке'
          />
        )}
      </Popup>
      <Hero />
      <Directions />
      <PsyTest />
      <ProgramsOnMain />
      <TopCourses />
      <BachelorCarousel
        title={'Высшее образование'}
        subtitle={'Программы бакалавриата от МИП'}
        cards={bachelors}
      />
      <ButtonToTop />
      <WhyBother />
      <YouTubeVideo
        videoId='rP37RRN2KfT1qtBQQBaH5e'
        title='Знакомство с институтом'
        isOnMain
      />

      <About />
      <EducationProcess
        paddingTop={90}
        paddingBottom={0}
        paddingTopMobile={0}
        paddingBottomMobile={0}
      />
      <DistanceEducation
        paddingTop={0}
        paddingBottom={100}
        paddingTopMobile={0}
        paddingBottomMobile={50}
      />
      <Cta
        title={'Подберите программу'}
        desc={'Оставьте заявку на консультацию менеджера приёмной комиссии'}
        cta='chooseProgram'
      />
      <WhatYouWillLearn title={'Чему вы научитесь в МИП'} onMain />
      <SalaryCounter />
      <Teachers
        onMain
        title={'Ведущие преподаватели'}
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma onMain ofType='Profession' />
      <ProfessionalLeague />
      <HappyStudents />
      <Reviews onMain reviews={reviewsSorted} />
      <PayLater />
      <Companies />
      <EntryForm />
      <Faq />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.home })

export default HomePage
