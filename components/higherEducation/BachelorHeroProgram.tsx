import PopupTrigger from '@/components/general/PopupTrigger'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramInfo from '@/components/program/ProgramInfo'
import ProgramLabel from '@/components/program/ProgramLabel'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/higherEducation/BachelorHeroProgram.module.sass'
import { useContext, useState } from 'react'
import Breadcrumbs from '../general/Breadcrumbs'
import classNames from 'classnames'

const BachelorHeroProgram = ({ breadcrumbs }) => {
  const { bachelor } = useContext(ContextStaticProps)
  const [cut, setCut] = useState(120)
  const [showFullText, setShowFullText] = useState(false)
  const descriptionLength = bachelor?.description?.length
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
      ? bachelor?.description?.slice(0, cut).concat('...')
      : bachelor?.description?.slice(0, cut)

  const cta ='signUp'

      const validTitles = [
        'Психоанализ и психоаналитическая психотерапия',
        'Суггестивная психология. Гипноз в психологическом консультировании',
        "Современные методы саморегуляции психологии здоровья",
        "Современная мастерская психологического консультирования",
        "Психология сексуальности и терапия сексуальных расстройств",
        "Практические навыки психологического консультирования. 2 ступень",
        "Практические навыки психологического консультирования. 1 ступень"
      ];

      const analysis = validTitles.includes(bachelor?.title);


  return (
    <>
      <div
        className={stls.mobileBg}
        style={{
          backgroundImage: `url(${bachelor?.heroPicture?.url})`
        }}>
        <span className={stls.filter}></span>
        {/* <div className={stls.discount}>
          <ProgramDiscount isWhite />
        </div> */}
        <div className={stls.content}>
          {/* <div className={stls.label}>
            <ProgramLabel />
          </div> */}
          <div>
            <h1 className={stls.title} >{bachelor?.title}</h1>
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
              backgroundImage: `url(${bachelor?.heroPicture?.url})`
            }}>
            <span className={stls.filter}></span>
            {/* <div className={stls.discount}>
              <ProgramDiscount isWhite />
            </div> */}
            <div className={stls.heading}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
              <div className={stls.containerHero}>
                {/* <div className={stls.label}>
                  <ProgramLabel />
                </div> */}
                <h1 className={classNames({
          [stls.title]: true,
          [stls.analysis]: analysis
        })}  >{bachelor?.title}</h1>
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

export default BachelorHeroProgram
