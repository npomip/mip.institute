export const findFilteredProgramsLength = (programs, slug, type='') => {
  let ofType
  type === 'courses' ? ofType = 'Course' : type === 'professions' ? ofType = 'Profession' : ofType = ''

  let filteredPrograms = programs
  .filter(el => el.studyFieldSlug === slug)
  if(ofType){
    filteredPrograms = filteredPrograms.filter(el => el.type === ofType)
  }
  
  return filteredPrograms.length
}