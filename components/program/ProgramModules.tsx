import ProgramModule from '@/components/program/ProgramModule'
import { ContextStaticProps } from '@/context/index'
import parseProgramContent from '@/helpers/parseProgramContent'
import stls from '@/styles/components/program/ProgramModules.module.sass'
import { useContext } from 'react'

const ProgramModules = () => {
  const { program } = useContext(ContextStaticProps)

  if (!program?.shortContents?.length) return null

  const { titles, topics } = parseProgramContent(program.shortContents)

  const list = titles.map((title, idx) => ({
    title,
    topics: topics[idx] || []
  }))

  return (
    <ul className={stls.container}>
      {list.map(({ title, topics }, idx) => (
        <ProgramModule key={title + idx} title={title} topics={topics} />
      ))}
    </ul>
  )
}

export default ProgramModules
