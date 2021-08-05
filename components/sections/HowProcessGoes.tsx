import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'

const HowProcessGoes = () => {
  const list = [
    { subtitle: 'Изучайте темы', desc: 'В курсе — практические видеоуроки' },
    {
      subtitle: 'Выполняете задания',
      desc: 'В том темпе, в котором вам удобно'
    },
    {
      subtitle: (
        <>
          Общайтесь <br className={stls.br} /> с единомышленниками
        </>
      ),
      desc: 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут'
    },
    {
      subtitle: (
        <>
          Работаете <br className={stls.br} /> с преподавателями
        </>
      ),
      desc: 'Закрепляете знания и исправляете ошибки'
    },
    {
      subtitle: 'Получаете диплом гособразца',
      desc: 'Защищаете дипломную работу и дополняете ею своё портфолио'
    },
    {
      subtitle: (
        <>
          Готовитесь <br className={stls.br} /> к собеседованию
        </>
      ),
      desc: 'Мы поможем подготовить резюме и расскажем как вести себя на собеседовании в компаниях-партнерах'
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumns>
          <h2 className={stls.title}>
            Как проходит обучение <br className={stls.br} /> и выпуск
          </h2>
          <ul className={stls.list}>
            {list.map(({ subtitle, desc }, idx) => (
              <li key={subtitle.toString() + idx} className={stls.item}>
                <div className={stls.counter}>
                  <span className={stls.number}>{idx + 1}</span>
                </div>
                <div className={stls.text}>
                  <h3 className={stls.subtitle}>{subtitle}</h3>
                  <p className={stls.desc}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
