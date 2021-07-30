import stls from '@/styles/components/sections/WhatWillYouLearn.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '../icons'

const WhatWillYouLearn = () => {
  const list = [
    'Рекомендации по составлению резюме и портфолио',
    'Подготовка к собеседованию в компаниях-партнёрах',
    'Подготовка к собеседованию в компаниях-партнёрах',
    'Рекомендации по составлению портфолио и резюме',
    'Симулятор собеседования',
    'Рекомендации по составлению портфолио и резюме',
    'Подготовка к собеседованию в компаниях-партнёрах'
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Чему вы научитесь</h2>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <li key={item + idx} className={stls.item}>
              <div className={stls.icon}>
                <IconCircleCheck calpha />
              </div>
              <p className={stls.p}>{item}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default WhatWillYouLearn
