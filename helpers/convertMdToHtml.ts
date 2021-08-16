import marked from 'marked'

const convertMdToHtml = ({ arr = [], param = null }) => {
  let output = null
  if (arr.length === 0) {
    output = marked(param)
  } else {
    output = arr.map(item => {
      item[param] = marked(item[param])
      return item
    })
  }
  return output
}

export default convertMdToHtml
