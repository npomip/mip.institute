import Wrapper from '@/ui/Wrapper'
import stls from './ProgramSelectionTop.module.sass'
import IconCheck from '@/components/icons/IconCheck'

const ProgramSelectionTop = () => {
  const purples = [
    {
      title: 'Доверие',
      text: 'Мы собрали команду из ведущих преподавателей-практиков и разработали программы обучения, отвечающие международным стандартам в сфере образования.'
    },
    {
      title: 'Доступное и качественное обучение',
      text: 'Программы института объединяют глубокую теорию и насыщенную практику, помогая освоить научную базу и уверенно применять психологические инструменты в работе с клиентами в удобном для вас формате формате.'
    }
  ]

  const cards = [
    {
      title: '{Профессиональная переподготовка}',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    },
    {
      title: 'Практическая подготовка',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    },
    {
      title: 'Повышение квалификации',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    },
    {
      title: 'Бакалавриат в МИП',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    }
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.coloured}>Широкий выбор </span>
          программ обучения
        </h2>
        <div className={stls.purples}>
          {purples.map((item, index) => (
            <div key={index} className={stls.purpleCard}>
              <span className={stls.purpleCardTitle}>{item.title}</span>
              <span className={stls.purpleCardText}>{item.text}</span>
            </div>
          ))}
        </div>
        <div className={stls.cards}>
          {cards.map((item, index) => (
            <div key={index} className={stls.greyCard}>
              <span className={stls.greyCardTitle}>{item.title}</span>
              <ul className={stls.list}>
                {item.points.map((item, index) => (
                  <li key={index} className={stls.point}>
                    <span>
                      <IconCheck noBackground />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramSelectionTop
