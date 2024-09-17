import { useState } from 'react'
import Wrapper from '../layout/Wrapper'
import RequirementsWithProgress from './RequirementWithProgress'
import stls from '@/styles/components/practicalTraining/RequirementsInProfession.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import CubicBlockFourSide from '../general/CubicBlockFourSide'
import { practicalTrainReq } from 'constants/practicalTrainReq'

const RequirementsInProfession = () => {
  const [activeIndex, setActiveIndex] = useState(0) // Индекс текущего активного блока
  const [rotate, setRotate] = useState(0)

  const blocks = [
    { id: 0, targetProgress: 50, text: 'Образование', rotate: 0 },
    { id: 1, targetProgress: 65, text: 'Опыт консультирования ', rotate: 90 },
    { id: 2, targetProgress: 85, text: 'Повышение квалификации', rotate: 180 },
    {
      id: 3,
      targetProgress: 100,
      text: 'Участие в супервизиях и интервизиях',
      rotate: 270
    }
  ]

  // Обработчик клика по блоку
  const handleClick = index => {
    setActiveIndex(index)
  }

  const gap = 8
  const desctopPosition = activeIndex * 90 + 30 + gap * activeIndex
  const laptopPosition = activeIndex * 77 + 30 + gap * activeIndex

  const isDesktopLayout = useBetterMediaQuery('(min-width: 1201px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <h2 className={stls.h2}>
            <span>Требования</span> к практикующим психологам
          </h2>
          {activeIndex === 3 && (
            <span className={stls.textDesktop}>
              Поздравляем! Вы прошли этот трудный, но увлекательный путь! Вы
              готовы оказывать профессиональную психологическую помощь людям.
            </span>
          )}
        </div>
        <div className={stls.progressContainerWrapper}>
          <div className={stls.progressBars}>
            <div
              className={stls.arrow}
              style={{
                top: `${isDesktopLayout ? desctopPosition : laptopPosition}px`, // Расчет позиции стрелки
                transition: 'top 0.5s ease'
              }}>
              ◀
            </div>
            {blocks.map((block, index) => (
              <div
                className={stls.progressBarWrapp}
                key={block.id}
                onClick={() => handleClick(index)}>
                <RequirementsWithProgress
                  card={practicalTrainReq[index]}
                  onClick={() => setRotate(block.rotate)}
                  text={block.text} // Текст блока
                  id={block.id}
                  targetProgress={block.targetProgress}
                  isActive={activeIndex === index} // Запускаем анимацию только для текущего активного блока
                />
              </div>
            ))}
          </div>
          <CubicBlockFourSide rotate={rotate} />
        </div>
        <div className={stls.addInfo}>
          <span className={stls.addInfoTitle}>*Личная терапия</span>
          <p className={stls.addInfoText}>
            Если опыт прохождения личной терапии отсутствует, его можно
            получить, проработав внутренние проблемы с другим сертифицированным
            специалистом.
          </p>
        </div>
      </Wrapper>
    </section>
  )
}

export default RequirementsInProfession
