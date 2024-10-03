const splitIntoSemesters = (program) => {
  const semesters = program?.split(/(?=\d+ семестр)/)
  let topics = {}

  semesters?.forEach(semester => {
    const [semesterHeader, ...semesterContent] = semester.split('\n')
    const semesterNumber = semesterHeader.match(/\d+/)[0]
    topics[`semester_${semesterNumber}`] = semesterContent.join('\n').trim()
  })

  return { semesters }
}

export default splitIntoSemesters