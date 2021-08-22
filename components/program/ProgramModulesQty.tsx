import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getParagraphInnerHtml } from '@/helpers/index'

const ProgramModulesQty = () => {
  const {
    program: { shortContents }
  } = useContext(ProgramContext)

  const titles = getParagraphInnerHtml(shortContents)

  return (
    <div className={stls.container}>
      <p className={stls.qty}>{titles.length}</p>
      <p className={stls.text}>Тематических модулей</p>
    </div>
  )
}

export default ProgramModulesQty
