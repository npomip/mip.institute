import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'

const HowProcessGoes = () => {
  const list = [
    {
      subtitle: 'Изучайте темы',
      desc: 'В каждом модуле от 5 до 10 теоретических и практических видеолекций'
    },
    {
      subtitle: 'Выполняете задания',
      desc: 'Для закрепления материала проходите практикумы и практические задания'
    },
    {
      subtitle: (
        <>
          Общайтесь <br className={stls.br} /> с куратором
        </>
      ),
      desc: 'Персональный куратор всегда поможет и подскажет Вам на протяжении всего обучения'
    },
    {
      subtitle: (
        <>
          Работаете <br className={stls.br} /> с преподавателями
        </>
      ),
      desc: 'Коммуницируйте с преподавателями онлайн на вебинарах и практических работах'
    },
    {
      subtitle: 'Делаете первые шаги',
      desc: 'Разбираем возможные компании работодатели, важные инструменты продвижения психолога и развитие личного бренда для Вашей карьеры'
    },
    {
      subtitle: 'Получаете диплом или удостоверение',
      desc: 'После прохождения курса и успешной сдачи итоговой работы. Дополните своё портфолио'
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
