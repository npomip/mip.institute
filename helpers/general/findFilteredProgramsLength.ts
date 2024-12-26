export const findFilteredProgramsLength = (programs, slug, type='', filtered='') => {
  
  let ofType
  type === 'courses' ? ofType = 'Course' : type === 'professions' ? ofType = 'Profession' : type === 'shortTerm' ? ofType = 'ShortTerm' : type === 'bachelor' ? ofType = 'Bachelor' : ofType = ''

  let filteredPrograms = programs
  .filter(el => el.studyFieldSlug === slug)
  if(ofType){
    filteredPrograms = filteredPrograms.filter(el => el.type === ofType)
  }
  if(filtered === 'popular') {
    filteredPrograms = filteredPrograms.filter(el => el.isPopular === true)
  }
  
  return filteredPrograms.length
}