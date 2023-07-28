import stls from '@/styles/components/sections/BriefProgramContents.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import ProgramModules from '@/components/program/ProgramModules'

const BriefProgramContents = ({planRef}) => {
  return (
    <section ref={planRef} className={stls.container}>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.heading}>
            <h2 className={stls.title}>Краткая программа курса</h2>
            <p className={stls.p}>
              Практики, которым мы учим, и методология, на которой строится
              курс, проверены не только практическим опытом преподавателей, но и
              строгими научными исследованиями
            </p>
          </div>
          <div className={stls.qty}>
            <ProgramModulesQty />
          </div>
        </div>
        <ProgramModules />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContents
