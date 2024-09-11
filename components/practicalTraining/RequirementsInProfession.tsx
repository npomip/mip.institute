import { useState } from 'react'
import Wrapper from '../layout/Wrapper'
import RequirementsWithProgress from './RequirementWithProgress'
import stls from '@/styles/components/practicalTraining/RequirementsInProfession.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { OneNumber } from '../icons'

const RequirementsInProfession = () => {
  const [activeIndex, setActiveIndex] = useState(0) // Индекс текущего активного блока
  const [rotate, setRotate] = useState(0);


  const blocks = [
    { id: 0, targetProgress: 50, text: 'Образование', rotate: 0 },
    { id: 1, targetProgress: 65, text: 'Опыт консультирования ', rotate: 90 },
    { id: 2, targetProgress: 95, text: 'Повышение квалификации', rotate: 180 },
    { id: 3, targetProgress: 100, text: 'Участие в супервизиях и интервизиях', rotate: 270 }
  ]

  // Обработчик клика по блоку
  const handleClick = index => {
    setActiveIndex(index)
    // setRotate(rotate + 90) // Устанавливаем активный блок для запуска прогресса
  }

  const gap = 8
  const desctopPosition = activeIndex * 90 + 30 + gap * activeIndex
  const laptopPosition = activeIndex * 77 + 30 + gap * activeIndex

  const isDesktopLayout = useBetterMediaQuery('(min-width: 1201px)')

  console.log(rotate)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.h2}>
          <span>Требования</span> к практикующим психологам
        </h2>
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
                  onClick={()=>setRotate(block.rotate)}
                  text={block.text} // Текст блока
                  id={block.id}
                  targetProgress={block.targetProgress}
                  isActive={activeIndex === index} // Запускаем анимацию только для текущего активного блока
                />
              </div>
            ))}
          </div>
          <div className={stls.scene}>
            <div
              className={stls.cube}
              style={{
                transform: `rotateX(${rotate}deg)`,
                transition: 'transform 1s ease' // плавная анимация
              }}>
              <div className={`${stls.card} ${stls.first}`}>
                <div className={stls.text}>
                  <p className={stls.title}>Образование</p>
                  <p className={stls.subtitle}>
                    Необходимо наличие{' '}
                    <span>высшего образования по психологии</span> или
                    прохождение программы{' '}
                    <span>профессиональной переподготовки.</span>
                  </p>
                </div>
                <p className={stls.num}>1</p>
              </div>

              <div className={`${stls.card} ${stls.second}`}>
                <div className={stls.text}>
                  <p className={stls.title}>Опыт консультирования</p>
                  <p className={stls.subtitle}>
                    Необходимо наличие{' '}
                    <span>высшего образования по психологии</span> или
                    прохождение программы{' '}
                    <span>профессиональной переподготовки.</span>
                  </p>
                </div>
                <p className={stls.num}>2</p>
              </div>

              <div className={`${stls.card} ${stls.third}`}>
                <div className={stls.text}>
                  <p className={stls.title}>Повыщение квалификации</p>
                  <p className={stls.subtitle}>
                    Необходимо наличие{' '}
                    <span>высшего образования по психологии</span> или
                    прохождение программы{' '}
                    <span>профессиональной переподготовки.</span>
                  </p>
                </div>
                <p className={stls.num}>3</p>
              </div>

              <div className={`${stls.card} ${stls.forth}`}>
                <div className={stls.text}>
                  <p className={stls.title}>Участие</p>
                  <p className={stls.subtitle}>
                    Необходимо наличие{' '}
                    <span>высшего образования по психологии</span> или
                    прохождение программы{' '}
                    <span>профессиональной переподготовки.</span>
                  </p>
                </div>
                <p className={stls.num}>4</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default RequirementsInProfession
