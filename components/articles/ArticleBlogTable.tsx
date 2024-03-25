import stls from '@/styles/components/articles/ArticleBlogTable.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'

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
        <table className={stls.table} >
        <tbody >
          {row.map(oneColumn => (
            
              <tr key={oneColumn.id}>
              {oneColumn.record.map(el => (
                <td key={el.id} style={{
                  // border: '1px solid black',
                  backgroundColor: '#FBF4FF'
                }} >
                  {el.text}
                </td>
              ))}
              </tr>
            
            //{oneColumn.record.map}
          ))}
          </tbody>
          </table>
      </div>
  )
}

export default ArticleBlogTable