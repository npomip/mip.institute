import stls from '@/styles/components/sections/CreateApplication.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { FormAlpha } from '@/components/forms'
import { IconAtom } from '@/components/icons'
import TwoColumns from '../layout/TwoColumns'
import ImgCreateApplication from '../imgs/general/ImgCreateApplication'

const CreateApplication = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Заявка на поступление</h2>
        <div className={stls.content}>

        
        <TwoColumns>
          <div className={stls.img}>
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