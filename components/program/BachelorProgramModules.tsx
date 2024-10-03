import BachelorProgramModule from '@/components/program/BachelorProgramModule'
import stls from '@/styles/components/program/ProgramModules.module.sass'

const BachelorProgramModules = ({ program }) => {
  const semesters = program.split(/\n\n(?=\d)/).map(sem => {
    const [title, ...topics] = sem.split('\n').filter(Boolean)
    const cleanedTopics = topics
      .map(topic => topic.replace(/^\s*-\s*/, '').trim())
      .filter(topic => topic.length > 0)

    return { title, topics: cleanedTopics }
  })

  return (
    <ul className={stls.container}>
      {semesters.map(({ title, topics }, idx) => (
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
