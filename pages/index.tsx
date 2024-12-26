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
import DirectionsNew from '@/components/sections/DirectionsNew'
import DistanceEducation from '@/components/sections/DistanceEducation'
import EducationProcess from '@/components/sections/EducationProcess'
import EntryForm from '@/components/sections/EntryForm'
import HappyStudents from '@/components/sections/HappyStudents'
import PayLater from '@/components/sections/PayLater'
import ProfessionalLeague from '@/components/sections/ProfessionalLeague'
import PsyTest from '@/components/sections/PsyTest'
import SalaryCounter from '@/components/sections/SalaryCounter'
import TopCourses from '@/components/sections/TopCourses'
import YouTubeVideo from '@/components/sections/YouTubeVideo'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import preview from '@/config/preview'
import truncate from '@/helpers/general/truncate'
import {
  sortBasedOnNumericOrder,
  sortReviewsCreatedAtASC
} from '@/helpers/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import { TypePageHomeProps } from '@/types/index'
import FortuneWheel from '@/ui/FortuneWheel'
import allowedNames from 'constants/indexMain'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'

const HomePage: NextPage<TypePageHomeProps> = ({
  programs,
  reviews,
  teachers,
  bachelors,
  practicalTrainings
}) => {
  useHandleContextStaticProps({ programs })

  const [layout, setLayout] = useState<'old' | 'new'>('old')
  const [open, setOpen] = useState(false)
  const [mustSpin, setMustSpin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const abTestKey = localStorage.getItem('AB') || 'old'
    setLayout(abTestKey as 'old' | 'new')

    if (router.query.utm_source === 'direct_link') {
      setOpen(true)
    }
  }, [router.query])

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

  const handleSpin = () => setMustSpin(true)
  const handleStopSpinning = () => setMustSpin(false)

  // Массив компонентов для "old"
  const oldLayoutComponents = [
    <>
      <Hero key='hero' />
      <FortuneWheel
        key='fortuneWheel'
        mustStartSpinning={mustSpin}
        onClick={handleSpin}
        onStopSpinning={handleStopSpinning}
      />
      <DirectionsNew
        key='directionsNew'
        programs={programs}
        bachelors={bachelors}
        practicalTrainings={practicalTrainings}
      />
      <PsyTest key='psyTest' />
      <TopCourses key='topCourses' />
      <ButtonToTop key='buttonToTop' />
      <WhyBother key='whyBother' />
      <YouTubeVideo
        key='youtubeVideo'
        videoId='2WALhR1ZcszBWNRXQ2kNSB'
        title='Знакомство с институтом'
        isOnMain
      />
      <About key='about' />
      <EducationProcess key='educationProcess' />
      <DistanceEducation
        key='distanceEducation'
        paddingTop={0}
        paddingBottom={100}
        paddingTopMobile={0}
        paddingBottomMobile={50}
      />
      <Cta
        key='cta'
        title='Подберите программу'
        desc='Оставьте заявку на консультацию менеджера приёмной комиссии'
        cta='chooseProgram'
      />
      <WhatYouWillLearn
        key='whatYouWillLearn'
        title='Чему вы научитесь в МИП'
        onMain
      />
      <SalaryCounter key='salaryCounter' title='Психология' />
      <Teachers
        key='teachers'
        onMain
        title='Ведущие преподаватели'
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma key='yourDiploma' onMain ofType='Profession' />
      <ProfessionalLeague key='professionalLeague' />
      <HappyStudents key='happyStudents' />
      <Reviews key='reviews' onMain reviews={reviewsSorted} />
      <PayLater key='payLater' />
      <Companies key='companies' />
      <EntryForm key='entryForm' />
      <Faq key='faq' />
    </>
  ]

  // Массив компонентов для "new"
  const newLayoutComponents = [
    <>
      <Hero key='hero' />
      <div className={stls.aboutPadding}>
        <About key='about' />
      </div>
      <WhyBother key='whyBother' />
      <YouTubeVideo
        key='youtubeVideo'
        videoId='2WALhR1ZcszBWNRXQ2kNSB'
        title='Знакомство с институтом'
        isOnMain
      />
      <EducationProcess key='educationProcess' />
      <DistanceEducation
        key='distanceEducation'
        paddingTop={0}
        paddingBottom={100}
        paddingTopMobile={0}
        paddingBottomMobile={50}
      />
      <DirectionsNew
        key='directionsNew'
        programs={programs}
        bachelors={bachelors}
        practicalTrainings={practicalTrainings}
      />
      <PsyTest key='psyTest' />
      <TopCourses key='topCourses' />
      <ButtonToTop key='buttonToTop' />
      <div className={stls.youLearnPadding}>
        <WhatYouWillLearn
          key='whatYouWillLearn'
          title='Чему вы научитесь в МИП'
          onMain
        />
      </div>
      <SalaryCounter key='salaryCounter' title='Психология' />
      <Teachers
        key='teachers'
        onMain
        title='Ведущие преподаватели'
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma key='yourDiploma' onMain ofType='Profession' />
      <div className={stls.ctaPadding}>
        <Cta
          key='cta'
          title='Подберите программу'
          desc='Оставьте заявку на консультацию менеджера приёмной комиссии'
          cta='chooseProgram'
        />
      </div>
      <ProfessionalLeague key='professionalLeague' />
      <HappyStudents key='happyStudents' />
      <Reviews key='reviews' onMain reviews={reviewsSorted} />
      <PayLater key='payLater' />
      <Companies key='companies' />
      <EntryForm key='entryForm' />
      <Faq key='faq' />
    </>
  ]
  // TODO: удалить временные стили после отката основной страницы к обычному состоянию
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

      {(layout === 'old' ? oldLayoutComponents : newLayoutComponents).map(
        component => component
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.home })

export default HomePage
