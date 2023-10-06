import stls from '@/styles/components/sections/HeroProgram.module.sass'
import { useContext, useState } from 'react'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import { ImgCourse2 } from '@/components/imgs'
import ProgramInfo from '@/components/program/ProgramInfo'
import { ContextStaticProps } from '@/context/index'
import parse from 'html-react-parser'
import marked from 'marked'
import PopupTrigger from '@/components/general/PopupTrigger'
import Breadcrumbs from '../general/Breadcrumbs'

const HeroProgram = ({breadcrumbs}) => {
  const { curProgramsType, program } = useContext(ContextStaticProps)
  const [cut, setCut] = useState(210)
  const [showFullText, setShowFullText] = useState(false)
  const descriptionLength = program?.description?.length
  const cutHandler = () => {
    setShowFullText(!showFullText)
    if (!showFullText) {
      setCut(descriptionLength)
    } else {
      setCut(210)
    }
  }
  return (
    <>
      <section className={stls.container}>
        <Wrapper>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div className={stls.top}>
            <div className={stls.heading}>
              
              <div className={stls.label}>
                <ProgramLabel />
              </div>
              <h1 className={stls.title}>{program?.title}</h1>
              <div className={stls.descriptionDesktop}>
                {program?.description && parse(marked(program.description))}
              </div>
              <div className={stls.btnsDesktop}>
                <PopupTrigger
                  
                  btn='alpha'
                  cta={
                    curProgramsType === 'course'
                      ? 'signUpForCourse'
                      : curProgramsType === 'profession'
                      ? 'signUpForProfession'
                      : 'signUp'
                  }
                />
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>
            <div className={stls.mobileFlex}>
              <div className={stls.pic}>
                <div className={stls.discount}>
                  <ProgramDiscount />
                </div>
                <div className={stls.img}>
                  <ImgCourse2 />
                </div>
              </div>
              <div
                className={stls.descriptionMobile}>
                <span className={stls.mobiledesc}>{cut < descriptionLength ?
                (program?.description &&
                  parse(marked(program.description.slice(0, cut).concat('...')))) : (program?.description &&
                    parse(marked(program.description.slice(0, cut))))
                  }</span>
                {/* {cut < descriptionLength && (
                  <>
                    <span>...</span>
                  </>
                )} */}
                <p onClick={cutHandler} className={stls.moreText}>
                  {showFullText ? 'Скрыть описание' : 'Читать далее'}
                </p>
              </div>
            </div>
          </div>
          <div className={stls.btnsMobile}>
            <PopupTrigger
              btn='alpha'
              cta={
                curProgramsType === 'course'
                  ? 'signUpForCourse'
                  : curProgramsType === 'profession'
                  ? 'signUpForProfession'
                  : 'signUp'
              }
            />
            <PopupTrigger btn='beta' cta='askQuestion' />
          </div>
          <div className={stls.info}>
            <ProgramInfo />
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default HeroProgram
