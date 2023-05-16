import stls from '@/styles/pages/about/MipInfo.module.sass'

export default function MipInfo() {
  return (
    <div className={stls.container}>
      <h1>Московский институт психологии</h1>
      <ul className={stls.redDot}>
        <li>Наш университет за современный подход в образовании</li>
        <li>Именно поэтому мы сконцентрировали внимание на дистанционном обучении</li>
        <li>Мы постоянно берем обратную связь от работодателей и адаптируем учебные программы</li>
      </ul>
      <p className={stls.last}>Даем современные практические навыки для открытия частной практики или построения успешной карьеры</p>
    </div>
  )
}
