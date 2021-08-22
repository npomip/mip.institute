const getParagraphInnerHtml = (str: string) => {
  const lis = str.match(/<p>.*<\/p>/g)
  const output = lis && lis.map(li => li.slice(4).slice(0, -5))
  return output
}

export default getParagraphInnerHtml
