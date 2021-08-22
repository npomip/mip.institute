import stls from '@/styles/components/program/ProgramModules.module.sass'
import ProgramModule from '@/components/program/ProgramModule'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getListItemsInnerHtml, getParagraphInnerHtml } from '@/helpers/index'

const ProgramModules = () => {
  const {
    program: { shortContents }
  } = useContext(ProgramContext)

  const topics = getListItemsInnerHtml(shortContents)
  const titles = getParagraphInnerHtml(shortContents)

  const list =
    titles &&
    titles
      .map((topic, idx) => ({
        title: topic,
        topics: topics[idx]
      }))
      .filter((item, idx) => idx < 5)

  return (
    <ul className={stls.container}>
      {list &&
        list.map(({ title, topics }, idx) => (
          <ProgramModule key={title + idx} title={title} topics={topics} />
        ))}
    </ul>
  )
}

export default ProgramModules
