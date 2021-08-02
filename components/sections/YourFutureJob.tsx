import stls from '@/styles/components/sections/YourFutureJob.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const YourFutureJob = () => {
  const list = [
    'История психологии',
    'Общая психология ',
    'Возрастная психология и психология развития',
    'Социальная психология',
    'Психодиагностика',
    'Педагогическая психология',
    'Психотерапия',
    'История психологии',
    'Общая психология',
    'Возрастная психология и психология развити'
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Кем сможете работать</h2>
        <div className={stls.content}>
          <p className={stls.p}>В результате обучения вы:</p>
          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <p className={stls.p}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourFutureJob
