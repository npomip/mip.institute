import stls from '@/styles/components/sections/FullProgram.module.sass'
import Wrapper from '@/ui/Wrapper'
import ImgFullProgram1 from '@/components/imgs/fullprogram/ImgFullProgram1'
import PopupTrigger from '@/ui/PopupTrigger'

const FullProgram = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={stls.text}>
            <h2 className={stls.title}>
              Остались вопросы? Поможем определиться с программой
            </h2>
            <p className={stls.p}>
              Вы можете оставить заявку на обратную связь. Менеджеры приёмной
              комиссии свяжутся с вами и помогут подобрать программу под ваш
              запрос и уровень знаний, а также предоставят информацию об
              обучении и поступлении
            </p>
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='alpha' cta='askQuestion' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
