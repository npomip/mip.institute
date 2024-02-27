import TwoColumns from '@/components/layout/TwoColumns'
import Wrapper from '@/components/layout/Wrapper'
import gif from '@/public/assets/imgs/gif/howProcessGoes.gif'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Image from 'next/image'

interface listType {
  desc: string
}

type ProcessType = {
  processRef?: any
  list: listType[]
}

const HowProcessGoes = ({ processRef, list }: ProcessType) => {
  const subtitle = (
    <>
      <p className={stls.leftTitle}>
        Обучение осуществляется по заочной форме с применением дистанционных
        <span className={stls.star}>*</span> технологий. Лекции, общение,
        тестирование проходят в онлайн формате через образовательную платформу
      </p>
    </>
  )

  return (
    <section ref={processRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Как проходит обучение</h2>
        <TwoColumns>
          <div className={stls.left}>
            {subtitle}
            <div className={stls.img}>
              <Image width={569} height={328} src={gif} alt='gif' />
            </div>
            <p className={stls.leftDesc}>
              <span>Дистанционное образование</span> — это обучение в комфортном
              темпе из любой точки мира и возможность совмещать с работой
            </p>
          </div>

          <div className={stls.right}>
            <p className={stls.listTitle}>
              В программу дистанционного обучения входит:
            </p>
            <ul className={stls.list}>
              {list.map(({ desc }, idx) => (
                <li key={desc + idx} className={stls.item}>
                  <div className={stls.counter}>
                    <span className={stls.number}>{idx + 1}</span>
                  </div>
                  <div className={stls.text}>
                    <p className={stls.desc}>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
