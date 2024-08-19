import stls from '@/styles/components/practicalTraining/PracticalWhatYouWillLearnItem.module.sass'
import { WhatYouWillLearnItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import parse from 'html-react-parser'
import marked from 'marked'
type Props = {
  block?: WhatYouWillLearnItem
  number: number
}

const PracticalWhatYouWillLearnItem = ({ block, number }: Props) => {
  const renderer = new marked.Renderer()
  renderer.strong = text => {
    return `<span class=${stls.strongText}>${text}</span>`
  }
  marked.setOptions({ renderer })
  const parsedText = parse(marked(block.text))

  return (
    <div className={stls.container}>
      <div className={stls.blockNumber}>
        <span className={stls.number} style={{backgroundColor: `${block.color}`}}>0{number}</span>
      </div>
      <div className={stls.text}>
        {parsedText}
      </div>
    </div>
  )
}

export default PracticalWhatYouWillLearnItem
