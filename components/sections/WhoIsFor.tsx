import stls from '@/styles/components/sections/WhoIsFor.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  IconGettingup,
  IconRemoteWork,
  IconToTheMoon
} from '@/components/icons'

const WhoIsFor = () => {
  const list = [
    'Применять полученные знания в своей жизни',
    'Начать путь в освоении новой профессии',
    'Выйти на более высокий уровень профессионализма'
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Для кого программа</h2>
        <p className={stls.subtitle}>
          Программа точно подойдет тем, кто хочет:
        </p>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <li key={item + idx} className={stls.item}>
              <div className={stls.icon}>
                {idx === 0 ? (
                  <IconToTheMoon />
                ) : idx === 1 ? (
                  <IconRemoteWork />
                ) : (
                  <IconGettingup />
                )}
              </div>
              <p className={stls.p}>{item}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default WhoIsFor
