import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgResume1 } from '@/components/imgs'

const YourResume = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше резюме после обучения</h2>
        <div className={stls.content}></div>
        <ImgResume1 />
      </Wrapper>
    </section>
  )
}

export default YourResume
