import TwoColumns from '@/components/layout/TwoColumns'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/EducationProcess.module.sass'
import Image from 'next/image'
import { useState } from 'react'
import TagOrange from '../general/TagOrange'
import img from '@/public/assets/imgs/general/howProcessGoes.jpeg'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import {textIndex, infoBachelor} from '../../constants/howProcessGoes'
import classNames from 'classnames'


type Props = { 
  isBachelorPage?: boolean
  paddingTop: number
  paddingBottom: number
  paddingTopMobile: number
  paddingBottomMobile: number
}

const EducationProcess = ({
  isBachelorPage = false,
  paddingTop = 0,
  paddingBottom = 0,
  paddingTopMobile = 0,
  paddingBottomMobile = 0
}: Props) => {
  const [showFullText, setShowFullText] = useState(false)

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

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
      className={classNames({[stls.container]:true,[stls.bachelorContainer]:isBachelorPage})}
      style={{
        paddingTop: isMobileAndTabletLayout ? paddingTopMobile : paddingTop,
        paddingBottom: isMobileAndTabletLayout
          ? paddingBottomMobile
          : paddingBottom
      }}>
      <Wrapper>
        <div className={stls.heading}>
          <div className={stls.tag}>
            <TagOrange>Процесс</TagOrange>
          </div>
          <h2 className={stls.title}>Как проходит обучение</h2>
        </div>
        <div className={stls.content}>
        {isBachelorPage ? 
        infoBachelor.map((item, index) => (
        <TwoColumns isBachelorPage key={index}>
          <div className={stls.text}>
            <p className={stls.leftTitle}>
              <span className={stls.boldText}>{item.text[0]}</span>
              {item.text[1]}
            </p>
          </div>
          <div className={stls.textMobile}>
          <p className={stls.leftTitle}>
            <span className={stls.boldText}>{item.text[0]}</span>
            {item.text[1]}
          </p>
          </div>
          <div className={stls.bothImg}>
            <Image
              className={stls.rightImg}
              width={570}
              height={372}
              src={item.src}
              alt='Как идет обучение?'
            />
          </div>
        </TwoColumns>
        ))
        : 
        <TwoColumns>
          <div className={stls.text}>{subtitle}</div>
          <div className={stls.textMobile}>{subtitleMobile}</div>
          <button
            className={stls.readMoreBtn}
            onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? 'Скрыть описание' : 'Читать далее'}
          </button>
          <div className={stls.img}>
            <Image
              className={stls.rightImg}
              width={575}
              height={260}
              src={img}
              alt='Как идет обучение?'
              // style={{
              //   width: '100%',
              //   height: 'auto'
              // }}
            />
          </div>
        </TwoColumns>
        }
        </div>
      </Wrapper>
    </section>
  )
}

export default EducationProcess
