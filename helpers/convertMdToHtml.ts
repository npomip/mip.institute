import marked from 'marked'

const convertMdToHtml = ({ arr = [], params = null }) => {
  let output = null
  if (arr && arr.length === 0) {
    params &&
      params.forEach(param => {
        output = marked(param)
      })
  } else {
    output =
      arr &&
      arr.map(item => {
        params &&
          params.forEach(param => {
            item[param] && (item[param] = marked(item[param]))
          })
        return item
      })
  }
  return output
}

export default convertMdToHtml
