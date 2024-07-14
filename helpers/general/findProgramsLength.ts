export const findProgramsLength = (programs, type='') => {
  let ofType
  type === 'courses' ? ofType = 'Course' : type === 'professions' ? ofType = 'Profession' : type === 'practice' ? ofType = 'Practice' : type === 'bachelor' ? ofType = 'Bachelor' : ofType = ''

  let filteredPrograms = programs
  if(ofType){
    filteredPrograms = filteredPrograms.filter(el => el.type === ofType)
  }
  
  return filteredPrograms.length
}