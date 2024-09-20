import {
  BriefProgramContents,
  Faq,
  PageNavigation,
  Teachers,
  YourDiploma
} from '@/components/sections'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useHandleContextStaticProps } from '@/hooks/index'
import pic from '@/public/assets/imgs/forWhom/hasDoubtsImage.png'
import { useRef } from 'react'
import NoteBlock from '../general/NoteBlock'
import BachelorHeroProgram from '../higherEducation/BachelorHeroProgram'
import ForWhomHE from '../higherEducation/ForWhomHE'
import Wrapper from '../layout/Wrapper'
import BachelorStudyCost from '../sections/BachelorStudyCost'
import DistanceEducation from '../sections/DistanceEducation'
import EducationProcess from '../sections/EducationProcess'
import EntryForm from '../sections/EntryForm'
import FourSteps from '../sections/FourSteps'
import LinkedPrograms from '../sections/LinkedPrograms'
import SalaryCounter from '../sections/SalaryCounter'
import { SeoPageBachelor } from '../seo'

const PageBachelor = ({ bachelor }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const costRef = useRef(null)
  const stepsForEnterRef = useRef(null)
  useHandleContextStaticProps({ bachelor })

  const sections = [
    {
      id: 'stepsForEnter',
      label: 'Как поступить',
      ref: stepsForEnterRef,
      condition: true
    },
    { id: 'plan', label: 'Учебный план', ref: planRef, condition: true },
    {
      id: 'teachers',
      label: 'Преподаватели',
      ref: teachersRef,
      condition: true
    },
    { id: 'diploma', label: 'Диплом', ref: diplomaRef, condition: true },
    { id: 'cost', label: 'Стоимость', ref: costRef, condition: true }
  ]
  const segments = ['bachelor']
  const labels = ['Высшее образование']
  const slug = ['bachelor']

  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments[index],
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <>
      <SeoPageBachelor program={bachelor} />
      <BachelorHeroProgram breadcrumbs={breadcrumbs} />
      <PageNavigation sections={sections} />
      <ForWhomHE />
      <FourSteps stepsForEnterRef={stepsForEnterRef} />
      <EducationProcess
        isBachelorPage
        paddingTop={90}
        paddingBottom={0}
        paddingTopMobile={0}
        paddingBottomMobile={0}
      />
      <BriefProgramContents
        coloredBackground
        planRef={planRef}
        program={bachelor?.shortContents}
        title='Программа курса'
      />
      <LinkedPrograms
        specializations={bachelor?.additional_specializations}
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
        <NoteBlock
          marginTop={isMobileAndTabletLayout ? 30 : 60}
          marginBottom={isMobileAndTabletLayout ? 30 : 60}
          imageSrc={pic}
          title='Вопрос по программе'
          description='Остались вопросы по программе или дополнительной специализации? Напишите нам в форме обратной связи.'
        />
      </Wrapper>
      <Teachers
        title='Преподаватели программы'
        onMain
        teachersList={bachelor?.teachers}
        teachersRef={teachersRef}
      />
      <YourDiploma isBachelor diplomaRef={diplomaRef} />
      <SalaryCounter title={bachelor?.title} />
      <DistanceEducation
        title='Конкурентное преимущество обучения в МИП:'
        list={bachelor?.benefits}
        paddingBottom={90}
        paddingBottomMobile={60}
      />
      <BachelorStudyCost costRef={costRef} />
      <EntryForm withPromo={false} onBachelor />
      <Faq />
    </>
  )
}

export default PageBachelor
