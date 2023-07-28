import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import { useEffect, useRef } from 'react'
import gif from '@/public/assets/imgs/gif/howProcessGoes.gif'
import Image from 'next/image'

const HowProcessGoes = ({ processRef }) => {
  // currRef = 'process'
  const procRef = useRef(null)

  const handleScroll = () => {
    // console.log(processRef.current.getBoundingClientRect().y)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const list = [
    {
      subtitle: 'Изучайте темы',
      desc: 'Онлайн-вебинары с возможностью просмотра записей в течение всего курса обучения'
    },
    {
      subtitle: 'Выполняете задания',
      desc: 'Разборы реальных клинических ситуаций'
    },
    {
      subtitle: (
        <>
          Общайтесь <br className={stls.br} /> с куратором
        </>
      ),
      desc: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      subtitle: (
        <>
          Общайтесь <br className={stls.br} /> с куратором
        </>
      ),
      desc: 'Онлайн-встречи с разбором вопросов от слушателей'
    },
    {
      subtitle: (
        <>
          Работаете <br className={stls.br} /> с преподавателями
        </>
      ),
      desc: 'Индивидуальные и групповые домашние задания с обратной связью от преподавателей'
    },
    {
      subtitle: 'Делаете первые шаги',
      desc: 'Общение с одногруппниками и единомышленниками в чатах'
    },
    {
      subtitle: 'Получаете диплом или удостоверение',
      desc: 'Тестирование и работа над ошибками после каждой дисциплины'
    },
    {
      subtitle: 'Получаете диплом или удостоверение',
      desc: 'Практические упражнения с решением ситуационных задач'
    }
  ]
  return (
    <section ref={processRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Как проходит обучение</h2>
        <TwoColumns>
          <div className={stls.left}>
            <p className={stls.leftTitle}>
              Обучение осуществляется по заочной форме с применением
              дистанционных* технологий. Лекции, общение, тестирование проходят
              в онлайн формате через образовательную платформу
            </p>
            <div className={stls.img}>
              <Image src={gif} />
            </div>
            <p className={stls.leftDesc}>
              <span>Дистанционное образование</span> — это обучение в комфортном темпе из любой точки мира 
            и возможность совмещать с работой</p>
          </div>

          <ul className={stls.list}>
            <p className={stls.listTitle}>В программу дистанционного обучения входит:</p>
            {list.map(({ subtitle, desc }, idx) => (
              <li key={subtitle.toString() + idx} className={stls.item}>
                <div className={stls.counter}>
                  <span className={stls.number}>{idx + 1}</span>
                </div>
                <div className={stls.text}>
                  {/* <h3 className={stls.subtitle}>{subtitle}</h3> */}
                  <p className={stls.desc}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
