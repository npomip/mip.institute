import stls from './ThreadBlock.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import ReactMarkdown from 'react-markdown'

type Props = {
  points: TermPoint[]
}

const ThreadBlockMobile = ({ points }: Props) => {
  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }

  const positions = [
    { x: 110, y: 100, textX: -105, textY: 20 }, // Для первой точки
    { x: 200, y: 222, textX: -60, textY: 30 }, // Для второй точки
    { x: 196, y: 385, textX: -120, textY: 20 }, // Для третьей точки
    { x: 200, y: 344, textX: -80, textY: 20 } // Для четвертой точки, если она есть
  ]

  return (
    <section className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='364'
        height='607'
        viewBox='0 0 364 597'
        fill='none'>
        <path
          d='M0.476562 1C0.476562 1 34.6588 76.5439 77.9766 99C135.09 128.608 179.532 68.0357 241.977 83.5C294.803 96.5823 366.517 99.228 362.477 153.5C358.593 205.666 260.976 188 231.499 214C183.317 256.499 123.708 209.501 85.498 229.382C30.498 258 -40.1465 315.55 41.498 343.383C85.4989 358.383 114.998 327.5 183.477 387.5C206.546 407.713 231.499 355 254.977 355C310.408 355 373.498 367 362.477 425C351.455 483 183.477 606.5 183.477 606.5'
          stroke='black'
          strokeWidth='0.5'
        />

        {points.map((point, index) => {
          const { x, y, textX, textY } = positions[index] || { x: 0, y: 0 }

          return (
            <g key={index} transform={`translate(${x}, ${y})`}>
              <text
                className={stls.svgtext}
                x='0'
                y='-10'
                textAnchor='middle'
                fill='black'>
                ({`${0}${index + 1}`})
              </text>
              <circle cx='0' cy='8' r='8.5' fill='#6F01C6' />
              <foreignObject x={textX} y={textY} width='300' height='150'>
                <div className={stls.text}>
                  <ReactMarkdown components={customRenderers}>
                    {point.text}
                  </ReactMarkdown>
                </div>
              </foreignObject>
            </g>
          )
        })}
      </svg>
    </section>
  )
}

export default ThreadBlockMobile
