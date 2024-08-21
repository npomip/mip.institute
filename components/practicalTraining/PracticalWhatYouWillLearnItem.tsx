import stls from '@/styles/components/practicalTraining/PracticalWhatYouWillLearnItem.module.sass'
import { WhatYouWillLearnItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import parse from 'html-react-parser'
import marked from 'marked'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

type Props = {
  block?: WhatYouWillLearnItem
  number: number
}

const PracticalWhatYouWillLearnItem = ({ block, number }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: `${isMobileAndTabletLayout ? '0px 0px -50% 0px' : '-30% 0px -50% 0px'}`,
    triggerOnce: false,
    delay: 150,
  });
  const renderer = new marked.Renderer()
  renderer.strong = text => {
    return `<span class=${stls.strongText}>${text}</span>`
  }
  marked.setOptions({ renderer })
  const parsedText = parse(marked(block.text))

  return (
    <div 
    ref={ref} 
    className={classNames({
      [stls.container]: true,
      [stls.visible]: inView,
      [stls.hidden]: !inView
    })}
    >
      <div className={stls.blockNumber}>
        <span 
        className={stls.number} 
        >0{number}</span>
      </div>
      <div className={stls.text}>
        {parsedText}
      </div>
    </div>
  )
}

export default PracticalWhatYouWillLearnItem
