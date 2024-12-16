import { useCallback, useEffect, useMemo, useState } from 'react'
import stls from './FortuneWheel.module.sass'
import classNames from 'classnames'
import { icons, segmentsObject } from '@/ui/FortuneWheel/constants'

interface Props {
  mustStartSpinning: boolean
  onClick: () => void
  onStopSpinning: () => void
}

const FortuneWheel = ({
  mustStartSpinning,
  onClick,
  onStopSpinning
}: Props) => {
  const [rotation, setRotation] = useState(-20)
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasSpun, setHasSpun] = useState(false)
  const segments = useMemo(() => segmentsObject, [mustStartSpinning])

  useEffect(() => {
    const storedResult = localStorage.getItem('fortuneWheelResult')
    if (storedResult) {
      setHasSpun(true)
    }
  }, [])

  const selectPrize = useCallback(() => {
    const weightedSegments = segments
      .filter(segment => segment.value > 0) // Исключаем сегменты с value = 0
      .flatMap(segment => Array(segment.value).fill(segment.text)) // Увеличиваем вероятность выпадения

    // Выбираем случайный элемент из массива
    const randomIndex = Math.floor(Math.random() * weightedSegments.length)
    const selectedPrize = weightedSegments[randomIndex]

    // Возвращаем индекс сегмента
    return segments.findIndex(segment => segment.text === selectedPrize)
  }, [segments])

  useEffect(() => {
    if (mustStartSpinning && !isSpinning && !hasSpun) {
      setIsSpinning(true)

      const prizeIndex = selectPrize() // Выбираем индекс приза
      const fullSpins = 5 * 360 // Минимум 5 полных оборотов
      const segmentAngle = 360 / segments.length // Угол одного сегмента

      // Рассчитываем центральный угол целевого сегмента
      const targetSegmentAngle = segmentAngle * prizeIndex + segmentAngle / 2

      // Корректируем итоговый угол с учётом начального угла
      const targetRotation = fullSpins + targetSegmentAngle - rotation

      setRotation(rotation + targetRotation) // Добавляем результат вращения

      setTimeout(() => {
        setIsSpinning(false)
        setHasSpun(true)
        localStorage.setItem('fortuneWheelResult', segments[prizeIndex].text)

        onStopSpinning()
      }, 4000) // 4 секунды — длительность анимации
    }
  }, [
    isSpinning,
    mustStartSpinning,
    onStopSpinning,
    rotation,
    segments,
    selectPrize,
    hasSpun
  ])

  return (
    <section className={stls.wheelContainer}>
      <div className={stls.textContainer}>
        <h2 className={stls.title}>Новогоднее колесо фортуны в МИП</h2>
        <p className={stls.subtitle}>Крути и забирай подарки!</p>
        <button
          className={classNames(stls.spinButton, stls.onDesktop)}
          onClick={onClick}
          disabled={isSpinning || hasSpun}>
          {hasSpun ? 'Вы уже крутили!' : 'Крутить!'}
        </button>
        <div>
          {icons.map((icon, index) => (
            <div key={index} className={icon.className}>
              {icon.component}
            </div>
          ))}
        </div>
      </div>
      <svg
        className={classNames(stls.wheel, isSpinning && stls.spinning)}
        viewBox='0 0 300 300'
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning
            ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)'
            : 'none'
        }}>
        {/* Слой сегментов */}
        {segments.map((segment, index) => {
          const startAngle = (index * 360) / segments.length
          const endAngle = ((index + 1) * 360) / segments.length
          const x1 = 150 + 150 * Math.cos((Math.PI * startAngle) / 180)
          const y1 = 150 + 150 * Math.sin((Math.PI * startAngle) / 180)
          const x2 = 150 + 150 * Math.cos((Math.PI * endAngle) / 180)
          const y2 = 150 + 150 * Math.sin((Math.PI * endAngle) / 180)

          return (
            <g key={index}>
              <path
                d={`M150,150 L${x1},${y1} A150,150 0 0,1 ${x2},${y2} Z`}
                fill={segment.color}
                stroke='#D6C5FF'
                strokeWidth='1'
              />
            </g>
          )
        })}

        {/* Слой текста */}
        {segments.map((segment, index) => {
          const startAngle = (index * 360) / segments.length
          const radius = 90
          const midX =
            150 + radius * Math.cos((Math.PI * (startAngle + 22.5)) / 180)
          const midY =
            150 + radius * Math.sin((Math.PI * (startAngle + 22.5)) / 180)
          const lines = segment.text.split('\n')

          return (
            <text
              key={index}
              x={midX}
              y={midY}
              textAnchor='middle'
              transform={`rotate(${startAngle + 22.5}, ${midX}, ${midY})`}>
              {lines.map((line, i) => (
                <tspan
                  key={i}
                  x={midX}
                  dy={i === 0 ? 0 : '1.2em'}
                  className={stls.segmentText}>
                  {line}
                </tspan>
              ))}
            </text>
          )
        })}
      </svg>
      <button
        className={classNames(stls.spinButton, stls.onMobile)}
        onClick={onClick}
        disabled={isSpinning || hasSpun}>
        {hasSpun ? 'Вы уже крутили!' : 'Крутить!'}
      </button>
    </section>
  )
}

export default FortuneWheel
