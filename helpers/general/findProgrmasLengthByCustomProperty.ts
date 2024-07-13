export const findProgrmasLengthByCustomProperty = (programs, slug, value) => {
  let filteredPrograms = programs
  .filter(el => el[slug] === value)

  return filteredPrograms.length
}