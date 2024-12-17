import { useCallback, useEffect, useMemo, useState } from 'react'
import stls from './FortuneWheel.module.sass'
import classNames from 'classnames'
import { icons, segmentsObject } from '@/ui/FortuneWheel/constants'
import Wrapper from '../Wrapper'
import PopupTrigger from '../PopupTrigger'

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
  const [rotation, setRotation] = useState(0) // Убираем стартовый -20
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasSpun, setHasSpun] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [savedResult, setSavedResult] = useState<string | null>(null)
  const segments = useMemo(() => segmentsObject, [mustStartSpinning])

  useEffect(() => {
    const storedResult = localStorage.getItem('fortuneWheelResult')
    if (storedResult) {
      setSavedResult(storedResult)
      setHasSpun(true)

      const resultIndex = segments.findIndex(
        segment => segment.text === storedResult
      )
      if (resultIndex !== -1) {
        const segmentAngle = 360 / segments.length
        const targetSegmentAngle = segmentAngle * resultIndex + segmentAngle / 2
        const correctedRotation = 360 - targetSegmentAngle
        setRotation(correctedRotation)
      }
    }
  }, [segments])

  const selectPrize = useCallback(() => {
    const weightedSegments = segments
      .filter(segment => segment.value > 0)
      .flatMap(segment => Array(segment.value).fill(segment.text))
    const randomIndex = Math.floor(Math.random() * weightedSegments.length)
    const selectedPrize = weightedSegments[randomIndex]

    return segments.findIndex(segment => segment.text === selectedPrize)
  }, [segments])

  useEffect(() => {
    if (mustStartSpinning && !isSpinning && !hasSpun) {
      setIsSpinning(true)

      const prizeIndex = selectPrize()
      const fullSpins = 5 * 360
      const segmentAngle = 360 / segments.length
      const targetSegmentAngle = segmentAngle * prizeIndex + segmentAngle / 2

      const correctedRotation = fullSpins + 360 - targetSegmentAngle
      setRotation(rotation + correctedRotation)

      setTimeout(() => {
        setIsSpinning(false)
        setHasSpun(true)
        localStorage.setItem('fortuneWheelResult', segments[prizeIndex].text)
        setSavedResult(segments[prizeIndex].giftCode)

        setTimeout(() => {
          setShowPopup(true)
        }, 2000)
        onStopSpinning()
      }, 4000)
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
    <Wrapper>
      <section className={stls.wheelContainer}>
        <div className={stls.textContainer}>
          <h2 className={stls.title}>Новогоднее колесо фортуны в МИП</h2>
          <p className={stls.subtitle}>Крути и забирай подарки!</p>

          {hasSpun ? (
            <div className={classNames(stls.formAlpha, stls.onDesktop)}>
              <PopupTrigger
                btn='alpha'
                cta='takeGift'
                isModalOpen={showPopup}
                withGift
                gift={savedResult}
              />
            </div>
          ) : (
            <button
              className={classNames(stls.spinButton, stls.onDesktop)}
              onClick={onClick}
              disabled={isSpinning || hasSpun}>
              Крутить!
            </button>
          )}
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
                  style={{
                    filter:
                      'drop-shadow(0px 4.232px 4.232px rgba(0, 0, 0, 0.25))'
                  }}
                  stroke='#D6C5FF'
                  strokeWidth='2'
                />
              </g>
            )
          })}
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

        {hasSpun ? (
          <div className={classNames(stls.formAlpha, stls.onMobile)}>
            <PopupTrigger
              btn='alpha'
              cta='takeGift'
              isModalOpen={showPopup}
              withGift
              gift={savedResult}
            />
          </div>
        ) : (
          <button
            className={classNames(stls.spinButton, stls.onMobile)}
            onClick={onClick}
            disabled={isSpinning || hasSpun}>
            Крутить!
          </button>
        )}
      </section>
    </Wrapper>
  )
}

export default FortuneWheel
