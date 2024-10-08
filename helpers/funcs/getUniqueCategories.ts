export const getUniqueCategories = (items) => {
  const categoriesMap = new Map()
  
  items.forEach(item => {
    const key = `${item.studyField}:${item.studyFieldSlug}`
    if (!categoriesMap.has(key)) {
      categoriesMap.set(key, { studyField: item.studyField, studyFieldSlug: item.studyFieldSlug })
    }
  })
  
  return Array.from(categoriesMap.values())
}