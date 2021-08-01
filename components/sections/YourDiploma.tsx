import stls from '@/styles/components/sections/YourDiploma.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import { ImgDiploma1 } from '@/components/imgs'

const YourDiploma = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваш будущий диплом</h2>
        <p className={stls.subtitle}>
          Все наши программы сертифицированы, имеют аккредитации, а дипломы
          котируются по всему миру! (текст взять с десктопа)
        </p>
        <div className={stls.content}>
          <ImgDiploma1 />
          <ImgDiploma1 />
        </div>

        <BtnAlpha text={'Узнать об институте'} />
      </Wrapper>
    </section>
  )
}

export default YourDiploma
