import TwoColumns from '@/ui/TwoColumns'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/EducationProcess.module.sass'
import Tag from '@/ui/Tag'
import classNames from 'classnames'
import { useState } from 'react'
import { textIndex } from 'constants/howProcessGoes'
import { CldImage } from 'next-cloudinary'

type Props = {
  isBachelorPage?: boolean
}

const EducationProcess = ({ isBachelorPage = false }: Props) => {
  const [showFullText, setShowFullText] = useState(false)

  const subtitleMobile = (
    <>
      <p className={stls.leftTitle}>
        <span className={stls.boldText}>{textIndex[0]}</span>
        {textIndex[1]}
        {showFullText && (
          <span>
            <span className={stls.boldText}>{textIndex[2]}</span>
            {textIndex[3]}
          </span>
        )}
      </p>
    </>
  )

  const subtitle = (
    <>
      <p className={stls.leftTitle}>
        <span className={stls.boldText}>{textIndex[0]}</span>
        {textIndex[1]}
        <span className={stls.boldText}>{textIndex[2]}</span>
        {textIndex[3]}
      </p>
    </>
  )

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.bachelorContainer]: isBachelorPage
      })}>
      <Wrapper>
        <div className={stls.heading}>
          <div className={stls.tag}>
            <Tag type='orange'>Процесс</Tag>
          </div>
          <h2 className={stls.title}>Как проходит обучение</h2>
        </div>
        <div className={stls.content}>
          <TwoColumns>
            <div className={stls.text}>{subtitle}</div>
            <div className={stls.textMobile}>{subtitleMobile}</div>
            <button
              className={stls.readMoreBtn}
              onClick={() => setShowFullText(!showFullText)}>
              {showFullText ? 'Скрыть описание' : 'Читать далее'}
            </button>
            <div className={stls.img}>
              <CldImage
                className={stls.rightImg}
                width={570}
                height={260}
                restore
                src='how_Process_Goes_99b35bc78a'
                alt='Как идет обучение?'
              />
            </div>
          </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default EducationProcess
