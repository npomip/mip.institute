export const getUniqueCategories = (items) => {
  const categories = new Set()
  items.forEach(item => categories.add(item.studyField))
  return Array.from(categories)
}