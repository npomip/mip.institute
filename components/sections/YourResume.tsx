import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgResume1 } from '@/components/imgs'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getListItemsInnerHtml, toNumberWithSpaces } from '@/helpers/index'

const YourResume = () => {
  const {
    program: { resumeTitle, entrySalary, resumeSkills }
  } = useContext(ProgramContext)

  const list = getListItemsInnerHtml(resumeSkills)

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
              <div className={stls.heading}>
                <p className={stls.p}>Профессия:</p>
                <h3 className={stls.h3}>{resumeTitle}</h3>
              </div>
              <div className={stls.heading}>
                <p className={stls.p}>Зарплата от:</p>
                <h3 className={stls.h3}>{toNumberWithSpaces(entrySalary)} р</h3>
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
