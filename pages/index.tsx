import About from '@/components/sections/About'
import Cta from '@/components/sections/Cta'
import Faq from '@/components/sections/Faq'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'
import WhyBother from '@/components/sections/WhyBother'
import YourDiploma from '@/components/sections/YourDiploma'
import ButtonToTop from '@/components/sections/ButtonToTop'
import Companies from '@/components/sections/Companies'
import DirectionsNew from '@/components/sections/DirectionsNew'
import EntryForm from '@/components/sections/EntryForm'
import PayLater from '@/components/sections/PayLater'
import TopCourses from '@/components/sections/TopCourses'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import preview from '@/config/preview'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageHomeProps } from '@/types/index'
import FortuneWheel from '@/ui/FortuneWheel'
import allowedNames from 'constants/indexMain'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import dynamic from 'next/dynamic'

const PopupCta = dynamic(() => import('@/components/popups/PopupCta'), {
  ssr: false
})

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), {
  ssr: false
})

const YouTubeVideo = dynamic(
  () => import('@/components/sections/YouTubeVideo'),
  {
    ssr: false
  }
)

const SalaryCounter = dynamic(
  () => import('@/components/sections/SalaryCounter'),
  {
    ssr: false
  }
)

const DistanceEducation = dynamic(
  () => import('@/components/sections/DistanceEducation'),
  {
    ssr: false
  }
)

const HappyStudents = dynamic(
  () => import('@/components/sections/HappyStudents'),
  {
    ssr: false
  }
)

const ProfessionalLeague = dynamic(
  () => import('@/components/sections/ProfessionalLeague'),
  {
    ssr: false
  }
)

const EducationProcess = dynamic(
  () => import('@/components/sections/EducationProcess'),
  {
    ssr: false
  }
)

const Teachers = dynamic(() => import('@/components/sections/Teachers'), {
  ssr: false
})

const WhatYouWillLearn = dynamic(
  () => import('@/components/sections/WhatYouWillLearn'),
  {
    ssr: false
  }
)

const HomePage: NextPage<TypePageHomeProps> = ({
  programs,
  reviews,
  teachers,
  bachelors,
  practicalTrainings
}) => {
  useHandleContextStaticProps({ programs })

  const teachersFromMain = teachers?.filter(teacher =>
    allowedNames.includes(teacher.name)
  )

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
      У Вас есть вопросы? Оставьте заявку! <br /> И сотрудник приемной комиссии
      свяжется с вами, чтобы рассказать все подробности
    </>
  )

  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.utm_source === 'direct_link') {
      setOpen(true)
    }
  }, [router.query])

  const [mustSpin, setMustSpin] = useState(false)

  const handleSpin = () => {
    setMustSpin(true)
  }

  const handleStopSpinning = () => {
    setMustSpin(false)
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={preview}
        noindex={preview}
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
        {
          // @ts-ignore
          close => (
            <PopupCta
              title='Задать вопрос'
              desc={desc}
              cta='Задать вопрос'
              question
              close={close}
              blockForAmo='Переход по ссылке'
            />
          )
        }
      </Popup>

      <Hero />
      {/* <Directions /> */}
      <FortuneWheel
        mustStartSpinning={mustSpin}
        onClick={handleSpin}
        onStopSpinning={handleStopSpinning}
      />
      <DirectionsNew
        programs={programs}
        bachelors={bachelors}
        practicalTrainings={practicalTrainings}
      />
      <PsyTest />
      <TopCourses />
      <ButtonToTop />
      <WhyBother />
      <YouTubeVideo
        videoId='2WALhR1ZcszBWNRXQ2kNSB'
        title='Знакомство с институтом'
        isOnMain
      />

      <About />
      <EducationProcess />
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
      <SalaryCounter title='Психология' />
      <Teachers
        onMain
        title={'Ведущие преподаватели'}
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma onMain ofType='Profession' />
      <ProfessionalLeague />
      <HappyStudents />
      <Reviews onMain reviews={reviews} />
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
