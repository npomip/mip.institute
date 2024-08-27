import stls from '@/styles/components/practicalTraining/ThreadBlock.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import parse from 'html-react-parser'
import marked from 'marked'

type Props = {
  points: TermPoint[]
}

const ThreadBlockDesc = ({ points }: Props) => {
  const renderer = new marked.Renderer()

  renderer.strong = text => {
    return `<span className=${stls.strongText}>${text}</span>`
  }

  marked.setOptions({ renderer })

  return (
    <section className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='auto'
        viewBox='0 0 1259 560'
        fill='none'>
        <path
          id='curve'
          d='M1 178.299L147.937 170.41C147.937 170.41 193.159 176.883 220.913 170.41C264.915 160.149 316.57 105.324 316.57 105.324C316.57 105.324 335.234 55.4063 359.96 34.3209C390.449 8.32184 417.935 8.50787 457.59 2.7639C517.821 -5.96045 612.416 20.5147 612.416 20.5147C612.416 20.5147 741.92 51.9922 826.412 62.9193C925.076 75.6795 1080.84 75.7393 1080.84 75.7393C1080.84 75.7393 1145.52 70.9877 1181.43 87.5732C1212.68 102.006 1249.69 110.371 1248.49 144.77C1247.31 178.191 1211.73 183.878 1181.43 198.023C1139.31 217.683 1098.98 181.306 1063.09 210.843C1036.49 232.73 1052.26 270.568 1023.64 289.735C1009.07 299.494 981.238 304.527 981.238 304.527C981.238 304.527 917.952 296.67 878.678 304.527C844.245 311.416 806 316.5 763.5 323C733.348 327.611 710.99 353.156 676.5 358C612.416 367 583.749 338.671 518.5 349C466.569 357.221 445.186 382.082 389.5 381C319.444 379.639 284.929 374.325 277.5 444C271.825 497.23 365.5 559 365.5 559'
          stroke='black'
          strokeWidth='0.6'
        />

        {points.map((point, index) => {
          const parsedText = marked(point.text)

          // Определение позиций для каждой точки
          const positions = [
            { x: 250, y: 150 }, // Для первой точки
            { x: 800, y: 52 }, // Для второй точки
            { x: 980, y: 295 }, // Для третьей точки
            { x: 500, y: 344 } // Для четвертой точки, если она есть
          ]

          const { x, y } = positions[index] || { x: 0, y: 0 } // Обработка индекса, если точек больше или меньше, чем задано

          return (
            <g key={index} transform={`translate(${x}, ${y})`}>
              <text
                className={stls.svgtext}
                x='0'
                y='-20'
                textAnchor='middle'
                fill='black'>
                ({`${0}${index + 1}`})
              </text>
              <circle cx='0' cy='8' r='8.5' fill='#6F01C6' />
              <foreignObject x='-20' y='41' width='300' height='150'>
                <div className={stls.text}>{parse(parsedText)}</div>
              </foreignObject>
            </g>
          )
        })}
      </svg>
    </section>
  )
}

export default ThreadBlockDesc
