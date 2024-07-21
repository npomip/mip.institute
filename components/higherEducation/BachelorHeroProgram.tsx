import PopupTrigger from '@/components/general/PopupTrigger'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramInfo from '@/components/program/ProgramInfo'
import ProgramLabel from '@/components/program/ProgramLabel'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/higherEducation/BachelorHeroProgram.module.sass'
import { useContext, useRef, useState } from 'react'
import Breadcrumbs from '../general/Breadcrumbs'
import classNames from 'classnames'
import BachelorProgramInfo from './BachelorProgramInfo'
import Popup from 'reactjs-popup'
import BachelorFullProgramPopup from '../popups/BachelorFullProgramPopup'

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

  const cta = 'signUp'

  const validTitles = [
    'Психоанализ и психоаналитическая психотерапия',
    'Суггестивная психология. Гипноз в психологическом консультировании',
    'Современные методы саморегуляции психологии здоровья',
    'Современная мастерская психологического консультирования',
    'Психология сексуальности и терапия сексуальных расстройств',
    'Практические навыки психологического консультирования. 2 ступень',
    'Практические навыки психологического консультирования. 1 ступень'
  ]

  const analysis = validTitles.includes(bachelor?.title)

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div
        className={stls.mobileBg}
        style={{
          backgroundImage: `url(${bachelor?.heroPicture?.url})`
        }}>
        <span className={stls.filter}></span>
        <div className={stls.content}>
          <div>
            <h1 className={stls.title}>
              <span>{bachelor?.educationCode}</span>
              {bachelor?.title}
            </h1>
            <div className={stls.mobileFlex}>
              <div className={stls.descriptionMobile}>
                <p className={stls.mobiledesc}>{bachelor?.shortDescription}</p>
                <Popup
                open={open}
                onClose={closeModal}
                  trigger={
                    <button onClick={() => setOpen(o => !o)} className={stls.moreText}>
                      Читать описание
                    </button>
                  }
                  position="right center"
                  modal nested>
                  {close => <BachelorFullProgramPopup close={close} content={bachelor.fullDescription} />}
                </Popup>
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
        <BachelorProgramInfo />
      </div>
      <section className={stls.container}>
        <Wrapper>
          <div
            className={stls.desktopBg}
            style={{
              backgroundImage: `url(${bachelor?.heroPicture?.url})`
            }}>
            <span className={stls.filter}></span>
            <div className={stls.heading}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
              <h1
                className={classNames({
                  [stls.title]: true,
                  [stls.analysis]: analysis
                })}>
                <span>{bachelor?.educationCode}</span>
                {bachelor?.title}
              </h1>
              <div className={stls.descriptionDesktop}>
                <p className={stls.mobiledesc}>{bachelor?.shortDescription}</p>
                <Popup
                  onClose={closeModal}
                  trigger={
                    <button className={stls.moreText}>
                      {'Читать описание'}
                    </button>
                  }
                  position="right center"
                  // closeOnDocumentClick
                  >
                  <BachelorFullProgramPopup content={bachelor.fullDescription} />
                </Popup>
              </div>
              <div className={stls.btnsDesktop}>
                <PopupTrigger btn='alpha' cta={cta} />
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
              <BachelorProgramInfo />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default BachelorHeroProgram
