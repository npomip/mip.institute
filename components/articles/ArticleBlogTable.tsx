import stls from '@/styles/components/articles/ArticleBlogTable.module.sass'


type ArticleBlogTableType = {
  props: {
    row?: {
      id: number,
      record?: {
        id: number,
        text: string
      } []
    } []             
}
}

const ArticleBlogTable = ({props} : ArticleBlogTableType) => {

  const { row } = props
  console.log(row)

  return (
      <div style={{backgroundColor: '#FBF4FF'}} className={stls.container}>
        <table style={{backgroundColor: '#FBF4FF'}} className={stls.table} >
        <tbody >
          {row.map(oneColumn => (
            
              <tr key={oneColumn.id}>
              {oneColumn.record.map(el => (
                <td key={el.id} >
                  {el.text}
                </td>
              ))}
              </tr>
          ))}
          </tbody>
          </table>
      </div>
  )
}

export default ArticleBlogTable