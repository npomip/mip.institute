import stls from '@/styles/components/program/ProgramModules.module.sass'
import BachelorProgramModule from '@/components/program/BachelorProgramModule'
import { getListItemsInnerHtml, getParagraphInnerHtml } from '@/helpers/index'
import marked from 'marked'

const BachelorProgramModules = ({ program }) => {
  const topics = program?.length > 0 && getListItemsInnerHtml(marked(program))
  const titles = program?.length > 0 && getParagraphInnerHtml(marked(program))

  const list =
    titles &&
    titles.map((topic, idx) => ({
      title: topic,
      topics: topics?.[idx]
    }))

  return (
    <ul className={stls.container}>
      {list &&
        list.map(({ title, topics }, idx) => (
          <BachelorProgramModule
            key={title + idx}
            title={title}
            topics={topics}
            isOpened={idx === 0}
          />
        ))}
    </ul>
  )
}

export default BachelorProgramModules
