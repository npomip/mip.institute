import stls from '@/styles/components/sections/WhyBother.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const WhyBother = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Почему стоит осваивать профессию психолога?
        </h2>
      </Wrapper>
    </section>
  )
}

export default WhyBother
