import stls from '@/styles/components/program/ProgramLabel.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramLabel = () => {
  const {
    program: { typeLabel }
  } = useContext(ProgramContext)

  return (
    <div className={stls.container}>
      <p className={stls.p}>{typeLabel}</p>
    </div>
  )
}

export default ProgramLabel
