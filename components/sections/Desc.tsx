import stls from '@/styles/components/sections/Desc.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconAtom } from '@/components/icons'

const Desc = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.icon}>
          <IconAtom calpha barelyVisible />
        </div>
        <p className={stls.p}>
          <span className={stls.highlight}>Арт-терапия</span> – это
          психологическая помощь клиенту посредством различных видов искусства.
          Например, через рисование можно выразить свои мысли, переживания и
          текущее настроение
        </p>
        <p className={stls.p}>
          Все, что сложно описать словами, человек изображает при помощи цветов,
          необычных форм и извилистых линий. При этом материалы могут
          использоваться абсолютно любые – гуашь, акварель, акрил – все, что
          может оставить след на бумаге
        </p>
      </Wrapper>
    </section>
  )
}

export default Desc
