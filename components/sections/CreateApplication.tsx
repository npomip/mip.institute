import stls from '@/styles/components/sections/CreateApplication.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { FormAlpha } from '@/components/forms'
import TwoColumns from '../layout/TwoColumns'
import ImgCreateApplication from '../imgs/general/ImgCreateApplication'
import IconGratefullPortal from '../icons/IconGratefullPortal'

const CreateApplication = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Заявка на поступление</h2>
        <div className={stls.content}>

        <div className={stls.smallOne}>
                <IconGratefullPortal xsmall />
              </div>
              <div className={stls.smallTwo}>
                <IconGratefullPortal xsmall/>
              </div>
              <div className={stls.medium}>
                <IconGratefullPortal thirtyPx/>
              </div>
              <div className={stls.mediumTwo}>
                <IconGratefullPortal thirtyPx/>
              </div>
              <div className={stls.mediumThree}>
                <IconGratefullPortal thirtyPx/>
              </div>
              <div className={stls.big}>
                <IconGratefullPortal fiftyPx  />
              </div>
        <TwoColumns>
          <div className={stls.img}>
          {/* <div className={stls.portals}> */}
              
            {/* </div> */}
            <ImgCreateApplication />
          </div>
          <div className={stls.form}>
            <FormAlpha inProfessions cta='Записаться'/>
          </div>
        </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default CreateApplication