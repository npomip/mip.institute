import { useCallback, useEffect, useMemo, useState } from 'react'
import stls from './FortuneWheel.module.sass'
import classNames from 'classnames'

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
  const [rotation, setRotation] = useState(-20) // Начальный угол (центр первого сегмента)
  const [isSpinning, setIsSpinning] = useState(false)

  // Список сегментов
  const segments = useMemo(
    () => [
      { text: '1 МЕСЯЦ СУПЕРВИЗИЙ', color: '#855EDF', value: 1 },
      { text: 'ДОП СКИДКА 10%', color: '#FEA07B', value: 2 },
      { text: 'ДОП СКИДКА 7%', color: '#855EDF', value: 2 },
      { text: 'ДОП СКИДКА 5%', color: '#FEA07B', value: 3 },
      { text: 'ПК В ПОДАРОК\n(ДО 2 МЕС)', color: '#855EDF', value: 1 },
      { text: 'СЕРТИФИКАТ\nНА 20 000 РУБ', color: '#FEA07B', value: 1 },
      { text: 'СЕРТИФИКАТ\nНА 30 000 РУБ', color: '#855EDF', value: 1 },
      { text: '1 СЕМИНАР', color: '#FEA07B', value: 0 } // Этот вариант исключён
    ],
    [mustStartSpinning]
  )

  // Выбор результата
  const selectPrize = useCallback(() => {
    // Создаём массив вероятностей на основе value
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
    if (mustStartSpinning && !isSpinning) {
      setIsSpinning(true)

      const prizeIndex = selectPrize() // Выбираем индекс приза
      const fullSpins = 3 * 360 // Минимум 3 полных оборота
      const segmentAngle = 360 / segments.length // Угол одного сегмента

      // Рассчитываем центральный угол целевого сегмента
      const targetSegmentAngle = segmentAngle * prizeIndex + segmentAngle / 2

      // Корректируем итоговый угол с учётом начального угла
      const targetRotation = fullSpins + targetSegmentAngle - rotation

      setRotation(rotation + targetRotation) // Добавляем результат вращения

      setTimeout(() => {
        setIsSpinning(false)
        onStopSpinning()
      }, 4000) // 4 секунды — длительность анимации
    }
  }, [
    isSpinning,
    mustStartSpinning,
    onStopSpinning,
    rotation,
    segments.length,
    selectPrize
  ])

  return (
    <div className={stls.wheelContainer}>
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
          const radius = 90 // Увеличенный радиус для текста
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
              fill='white'
              fontSize='9'
              fontWeight='bold'
              textAnchor='middle'
              transform={`rotate(${startAngle + 22.5}, ${midX}, ${midY})`}>
              {lines.map((line, i) => (
                <tspan key={i} x={midX} dy={i === 0 ? 0 : '1.2em'}>
                  {line}
                </tspan>
              ))}
            </text>
          )
        })}
      </svg>
      <div className={stls.marker} />
      <button
        className={stls.spinButton}
        onClick={onClick}
        disabled={isSpinning}>
        Крутить
      </button>
    </div>
  )
}

export default FortuneWheel
