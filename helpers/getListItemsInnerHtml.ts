const getListItemsInnerHtml = (str = '') => {
  const lis = str.match(/<li>.*<\/li>/g)
  const output = lis.map(li => li.slice(4).slice(0, -5))
  return output
}

export default getListItemsInnerHtml
