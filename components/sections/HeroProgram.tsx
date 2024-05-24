import PopupTrigger from '@/components/general/PopupTrigger'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramInfo from '@/components/program/ProgramInfo'
import ProgramLabel from '@/components/program/ProgramLabel'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/HeroProgram.module.sass'
import { useContext, useState } from 'react'
import Breadcrumbs from '../general/Breadcrumbs'

const HeroProgram = ({ breadcrumbs }) => {
  const { curProgramsType, program } = useContext(ContextStaticProps)
  const [cut, setCut] = useState(120)
  const [showFullText, setShowFullText] = useState(false)
  const descriptionLength = program?.description?.length
  const cutHandler = () => {
    setShowFullText(!showFullText)
    if (!showFullText) {
      setCut(descriptionLength)
    } else {
      setCut(120)
    }
  }

  const description =
    cut < descriptionLength
      ? program?.description?.slice(0, cut).concat('...')
      : program?.description?.slice(0, cut)

  const cta =
    curProgramsType === 'course'
      ? 'signUpForCourse'
      : curProgramsType === 'profession'
      ? 'signUpForProfession'
      : 'signUp'

  return (
    <>
      <div
        className={stls.mobileBg}
        style={{
          backgroundImage: `url(${program?.heroPicture?.url})`
        }}>
        <span className={stls.filter}></span>
        <div className={stls.discount}>
          <ProgramDiscount isWhite />
        </div>
        <div className={stls.content}>
          <div className={stls.label}>
            <ProgramLabel />
          </div>
          <div>
            <h1 className={stls.title}>{program?.title}</h1>
            <div className={stls.mobileFlex}>
              <div className={stls.descriptionMobile}>
                <p className={stls.mobiledesc}>{description}</p>
                <button onClick={cutHandler} className={stls.moreText}>
                  {showFullText ? 'Скрыть описание' : 'Читать далее'}
                </button>
              </div>
            </div>
            <div className={stls.btnsMobile}>
              <PopupTrigger btn='alpha' cta={cta} />
              <PopupTrigger btn='beta' cta='askQuestion' />
            </div>
          </div>
        </div>
      </div>
      <section className={stls.container}>
        <Wrapper>
          <div
            className={stls.desktopBg}
            style={{
              backgroundImage: `url(${program?.heroPicture?.url})`
            }}>
            <span className={stls.filter}></span>
            <div className={stls.discount}>
              <ProgramDiscount isWhite />
            </div>
            <div className={stls.heading}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
              <div>
                <div className={stls.label}>
                  <ProgramLabel />
                </div>
                <h1 className={stls.title}>{program?.title}</h1>
                <div className={stls.descriptionDesktop}>
                  <p className={stls.mobiledesc}>{description}</p>
                  <button onClick={cutHandler} className={stls.moreText}>
                    {showFullText ? 'Скрыть описание' : 'Читать далее'}
                  </button>
                </div>
                <div className={stls.btnsDesktop}>
                  <PopupTrigger btn='alpha' cta={cta} />
                  <PopupTrigger btn='beta' cta='askQuestion' />
                </div>
              </div>
            </div>
          </div>
          <div className={showFullText ? stls.infoDown : stls.info}>
            <ProgramInfo />
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default HeroProgram
