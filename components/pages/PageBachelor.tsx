// import { NextSeo } from 'next-seo'
// import { useContext } from 'react'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm,
  YourDiploma,
  FullProgram,
  Teachers,
  BriefProgramContents,
  PageNavigation,
  HeroProgram,
  Faq
} from '@/components/sections'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import EntryForm from '../sections/EntryForm'
import LinkedPrograms from '../sections/LinkedPrograms'
import SalaryCounter from '../sections/SalaryCounter'
import stls from '@/styles/pages/PageBachelor.module.sass'
import FourSteps from '../sections/FourSteps'
import DistanceEducation from '../sections/DistanceEducation'
import BachelorStudyCost from '../sections/BachelorStudyCost'
import ForWhomHE from '../higherEducation/ForWhomHE'
import NoteBlock from '../general/NoteBlock'
import pic from '@/public/assets/imgs/forWhom/hasDoubtsImage.png'
import Wrapper from '../layout/Wrapper'
import { useRef } from 'react'
import BachelorHeroProgram from '../higherEducation/BachelorHeroProgram'
import { useHandleContextStaticProps } from '@/hooks/index'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

// http://localhost:3000/bachelor/psihologo-pedagogicheskoye-obrazovanie

const PageBachelor = ({ bachelor }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const costRef = useRef(null)
  const stepsForEnterRef = useRef(null)
  useHandleContextStaticProps({ bachelor })

  const sections = [
    { id: 'stepsForEnter', label: 'Как поступить', ref: stepsForEnterRef, condition: true },
    { id: 'plan', label: 'Учебный план', ref: planRef, condition: true },
    { id: 'teachers', label: 'Преподаватели', ref: teachersRef, condition: true },
    { id: 'diploma', label: 'Диплом', ref: diplomaRef, condition: true },
    { id: 'cost', label: 'Стоимость', ref: costRef, condition: true },
    // { id: 'reviews', label: 'Отзывы', ref: reviewsRef, condition: true },
  ];
  const segments = ['bachelor']
  // const segments = router.asPath.split('/').filter(segment => segment !== '')

  const labels = ['Высшее образование']
  const slug = ['bachelor']

  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments[index],
      // path: '/' + segments.slice(0, index + 1).join('/'),
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <>
      <BachelorHeroProgram breadcrumbs={breadcrumbs} />
      <PageNavigation
        sections={sections}
      />
      <ForWhomHE />
      <FourSteps stepsForEnterRef={stepsForEnterRef} />
      <BriefProgramContents
        coloredBackground
        planRef={planRef}
        program={bachelor?.shortContents}
        title='Программа курса'
      />
      <LinkedPrograms
        programs={bachelor?.programs}
        title={
          isMobileAndTabletLayout ? (
            <>
              <p
                style={{ color: '#6F01C6', fontWeight: 500, fontSize: '30px' }}>
                Ваша дополнительная специализация
              </p>
              <p>
                Параллельная программа профессиональной переподготовки с
                присвоением квалификации
              </p>
            </>
          ) : (
            <h2 style={{ fontSize: '35px' }}>
              <span style={{ color: '#6F01C6' }}>
                Ваша дополнительная специализация
              </span>{' '}
              (параллельная программа профессиональной переподготовки с
              присвоением квалификации)
            </h2>
          )
        }
      />
      <Wrapper>

        <NoteBlock marginTop={isMobileAndTabletLayout ? 30 : 60} marginBottom={isMobileAndTabletLayout ? 30 : 60} imageSrc={pic} title='Вопрос по программе' description='Остались вопросы по программе или дополнительной специализации? Напишите нам в форме обратной связи.' />
      </Wrapper>
      <Teachers
        title='Преподаватели программы'
        onMain
        teachersList={bachelor?.teachers}
        teachersRef={teachersRef}
      />
      <YourDiploma  ofType='Profession' diplomaRef={diplomaRef} />
      <SalaryCounter  />
      <DistanceEducation
        title='Конкурентное преимущество обучения в МИП:'
        list={bachelor?.benefits}
        paddingBottom={90}
        paddingBottomMobile={60}
      />
      <BachelorStudyCost costRef={costRef} />
      <EntryForm withPromo={false} onBachelor />
      <Faq />
      {/* <FullProgram /> */}
    </>
  )
}

export default PageBachelor
