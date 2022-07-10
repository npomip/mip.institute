import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import cn from 'classnames'
import { ImgResume1 } from '@/components/imgs'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml, toNumberWithSpaces } from '@/helpers/index'
import marked from 'marked'

const YourResume = () => {
  const { program } = useContext(ContextStaticProps)

  const list =
    program?.resumeSkills?.length > 0 &&
    getListItemsInnerHtml(marked(program.resumeSkills))

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше резюме после обучения</h2>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.img}>
              <ImgResume1 />
            </div>
            <div className={stls.headings}>
              <div className={cn(stls.heading, stls.headingLeft)}>
                <p className={stls.p}>Профессия:</p>
                <h3 className={stls.h3}>{program?.resumeTitle}</h3>
              </div>
              <div className={stls.heading}>
                <p className={stls.p}>Зарплата от:</p>
                <h3 className={stls.h3}>
                  {toNumberWithSpaces(program?.entrySalary)}&nbsp;р
                </h3>
              </div>
            </div>
          </div>
          <ul className={stls.list}>
            {list &&
              list[0].map((item, idx) => (
                <li key={item + idx} className={stls.item}>
                  <p className={stls.itemText}>{item}</p>
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourResume
