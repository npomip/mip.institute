import stls from '@/styles/components/sections/HeroProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import { ImgCourse2 } from '@/components/imgs'
import ProgramInfo from '@/components/program/ProgramInfo'
import ProgramContext from '@/context/program/programContext'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import parse from 'html-react-parser'
import PopupTrigger from '@/components/general/PopupTrigger'

const HeroProgram = () => {
  const {
    program: { title, description }
  } = useContext(ProgramContext)

  const { curProgramsType } = useContext(ProgramsContext)

  return (
    <>
      <section className={stls.container}>
        <Wrapper>
          <div className={stls.top}>
            <div className={stls.heading}>
              <div className={stls.label}>
                <ProgramLabel />
              </div>
              <h1 className={stls.title}>{title}</h1>
              <div className={stls.descriptionDesktop}>
                {description && parse(description)}
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
            <div className={stls.pic}>
              <div className={stls.discount}>
                <ProgramDiscount />
              </div>
              <div className={stls.img}>
                <ImgCourse2 />
              </div>
            </div>
            <div className={stls.descriptionMobile}>
              {description && parse(description)}
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
