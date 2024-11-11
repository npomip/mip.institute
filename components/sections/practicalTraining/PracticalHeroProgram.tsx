import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/practicalTraining/PracticalHeroProgram.module.sass'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PopupTrigger from '@/ui/PopupTrigger'
import Tag from '@/ui/Tag'
import Wrapper from '@/ui/Wrapper'
import { useRouter } from 'next/router'
import PracticalProgramInfo from './PracticalProgramInfo'
import Breadcrumbs from '@/ui/Breadcrumbs'

type Props = {
  practicalTraining: PracticalTraining
}

const PracticalHeroProgram = ({ practicalTraining }: Props) => {
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

  const step = router.query.slug

  const tag = (
    <div className={stls.tag}>
      <Tag type='orange'>
        {step === 'first-step'
          ? '1 ступень'
          : step === 'second-step'
            ? '2 ступень'
            : step === 'third-step'
              ? '3 ступень'
              : 'Неизвестная ступень'}
      </Tag>
    </div>
  )
  return (
    <>
      {isMobileAndTabletLayout && (
        <>
          <div
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
                    <p className={stls.mobiledesc}>
                      {practicalTraining?.subtitle}
                    </p>
                  </div>
                </div>
                <div className={stls.btnsMobile}>
                  <PopupTrigger btn='alpha' cta={cta} />
                  <PopupTrigger btn='beta' cta='askQuestion' />
                </div>
              </div>
            </div>
          </div>
          <div className={stls.info}>
            <PracticalProgramInfo practicalTraining={practicalTraining} />
          </div>
        </>
      )}
      {!isMobileAndTabletLayout && (
        <section className={stls.container}>
          <Wrapper>
            <div
              className={stls.desktopBg}
              style={{
                backgroundImage: `url(${practicalTraining?.heroPicture?.url})`
              }}>
              <span className={stls.filter}></span>
              <div className={stls.heading}>
                <div className={stls.breadcrumbs}>
                  <Breadcrumbs lastLabel='Практическая подготовка' />
                </div>
                {tag}
                <h1 className={stls.title}>{title}</h1>
                <div className={stls.descriptionDesktop}>
                  <p className={stls.mobiledesc}>
                    {practicalTraining?.subtitle}
                  </p>
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
      )}
    </>
  )
}

export default PracticalHeroProgram
