import stls from '@/styles/components/program/ProgramModules.module.sass'
import BachelorProgramModule from '@/components/program/BachelorProgramModule'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml, getParagraphInnerHtml } from '@/helpers/index'
import marked from 'marked'

const BachelorProgramModules = ({program}) => {

  console.log(program);
  

  const topics =
    program?.length > 0 &&
    getListItemsInnerHtml(marked(program))
  const titles =
    program?.length > 0 &&
    getParagraphInnerHtml(marked(program))

console.log(topics);


  const list =
    titles &&
    titles
      .map((topic, idx) => ({
        title: topic,
        topics: topics?.[idx]
      }))

  return (
    <ul className={stls.container}>
      {list &&
        list.map(({ title, topics }, idx) => (
          <BachelorProgramModule key={title + idx} title={title} topics={topics} />
        ))}
    </ul>
  )
}

export default BachelorProgramModules