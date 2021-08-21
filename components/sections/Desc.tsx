import stls from '@/styles/components/sections/Desc.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconAtom } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import parse from 'html-react-parser'

const Desc = () => {
  const {
    program: { description }
  } = useContext(ProgramContext)
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.icon}>
          <IconAtom calpha barelyVisible />
        </div>
        <div className={stls.content}>{description && parse(description)}</div>
      </Wrapper>
    </section>
  )
}

export default Desc
