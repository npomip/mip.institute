import stls from '@/styles/components/general/AboutLeaf.module.sass'

const AboutLeaf = () => {
  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Об институте</h2>
      <p className={stls.p}>
        Московский Институт Психологии за современный подход в образовании
      </p>
      <p className={stls.p}>
        Мы постоянно берем обратную связь от работодателей и каждый месяц
        адаптируем учебные программы
      </p>
      <p className={stls.lastP}>
        <span className={stls.highlight}>Это в 12 раз быстрее</span> обновления
        программы обучения в государственном ВУЗе!
      </p>
    </div>
  )
}

export default AboutLeaf
