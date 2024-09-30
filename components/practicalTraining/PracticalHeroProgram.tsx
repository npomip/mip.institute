import PopupTrigger from '@/components/general/PopupTrigger'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalHeroProgram.module.sass'
import TBreadcrumb from '@/types/general/TBreadcrumb'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { useRouter } from 'next/router'
import TagOrange from '../general/TagOrange'
import PracticalProgramInfo from './PracticalProgramInfo'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

type Props = {
  breadcrumbs: TBreadcrumb[]
  practicalTraining: PracticalTraining
}

const PracticalHeroProgram = ({ breadcrumbs, practicalTraining }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const cta = 'signUp'
  const title = (
    <>
      Практические навыки
      <br />
      психологического
      <br />
      консультирования
    </>
  )

  const router = useRouter()

  const step = router.query.slug === 'first-step'
  
  const tag = (
    <div className={stls.tag}>
      <TagOrange>{step ? '1 ступень' : '2 ступень' }</TagOrange>
    </div>
  )
  return (
    <>
      {isMobileAndTabletLayout && <div
        className={stls.mobileBg}
        style={{
          backgroundImage: `url(${practicalTraining?.heroPicture?.url})`
        }}>
        <span className={stls.filter}></span>
        <div className={stls.content}>
          <div>
            {tag}
            <h1 className={stls.title}>{title}</h1>
            <div className={stls.mobileFlex}>
              <div className={stls.descriptionMobile}>
                <p className={stls.mobiledesc}>{practicalTraining?.subtitle}</p>
              </div>
            </div>
            <div className={stls.btnsMobile}>
              <PopupTrigger btn='alpha' cta={cta} />
              <PopupTrigger btn='beta' cta='askQuestion' />
            </div>
          </div>
        </div>
      </div>
      }
      <div className={stls.info}>
        <PracticalProgramInfo practicalTraining={practicalTraining} />
      </div>
      <section className={stls.container}>
        <Wrapper>
          <div
            className={stls.desktopBg}
            style={{
              backgroundImage: `url(${practicalTraining?.heroPicture?.url})`
            }}>
            <span className={stls.filter}></span>
            <div className={stls.heading}>
              {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
              {tag}
              <h1 className={stls.title}>{title}</h1>
              <div className={stls.descriptionDesktop}>
                <p className={stls.mobiledesc}>{practicalTraining?.subtitle}</p>
              </div>
              <div className={stls.btnsDesktop}>
                <PopupTrigger btn='alpha' cta='signUpForCourse' />
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
              <PracticalProgramInfo practicalTraining={practicalTraining} />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default PracticalHeroProgram
