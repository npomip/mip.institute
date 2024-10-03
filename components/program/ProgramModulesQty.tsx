import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import getDeclension from '@/helpers/getDeclension'
import parseProgramContent from '@/helpers/parseProgramContent'

type Props = {
  quantity: number
}

const ProgramModulesQty = ({ quantity }: Props) => {
  const { program } = useContext(ContextStaticProps)

  const { titles } = parseProgramContent(program?.shortContents)

  return (
    <div className={stls.container}>
      <p className={stls.qty}>
        {quantity ? quantity : titles && titles.length}
      </p>
      <p className={stls.text}>
        {quantity ? 'Семестров' : getDeclension(titles?.length)}
      </p>
    </div>
  )
}

export default ProgramModulesQty
