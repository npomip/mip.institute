export type ParagraphType = {
  type: 'paragraph'
  children: { text: string; type: 'text' | 'link'; url?: string; children?: { text: string }[] }[]
}

export type TopBlockDataType = {
  id: number
  title: string
  subtitle: ParagraphType[]
  button: ParagraphType[]
}

export type ParsedTopBlockDataType = {
  title: string
  description: string
  link: string | null
  linkText: string
}

export const parseTopBlockData = (data: TopBlockDataType): ParsedTopBlockDataType | null => {
  if (!data) return null

  const title = data.title || ''

  const description =
    data.subtitle?.map(p => p.children.map(c => c.text).join(' ')).join('\n') || ''

  const buttonObject = data.button.find(p => p.children.some(c => c.type === 'link'))

  const link = buttonObject ? buttonObject.children.find(c => c.type === 'link')?.url || null : null

  const linkText = buttonObject
    ? buttonObject.children.find(c => c.type === 'link')?.children?.[0]?.text || 'Перейти'
    : 'Перейти'

  return { title, description, link, linkText }
}

export const images = [
  {
    id: 1,
    xFactor: -55,
    yFactor: -45,
    top: '5%',
    left: '30%',
    width: 140,
    height: 140,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738241377/telegram_cloud_document_2_5226908665893643651_1_41a53db7be.jpg'
  },
  {
    id: 2,
    xFactor: -65,
    yFactor: -75,
    top: '20%',
    right: '10%',
    width: 130,
    height: 130,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738242190/3d_naklejka_4f357a311d.jpg'
  },
  {
    id: 3,
    xFactor: 25,
    yFactor: 60,
    bottom: '25%',
    right: '50%',
    width: 100,
    height: 100,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738242235/Frame_3_87cdf7726f.jpg'
  },
  {
    id: 4,
    xFactor: 60,
    yFactor: 66,
    bottom: '10%',
    right: '15%',
    width: 150,
    height: 150,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738241377/telegram_cloud_document_2_5226517798099905277_1_40b9da480b.jpg'
  },
  {
    id: 5,
    xFactor: -55,
    yFactor: -45,
    top: '27%',
    left: '10%',
    width: 150,
    height: 150,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738247499/Group_2087330315_d610e633aa.png'
  }
]
