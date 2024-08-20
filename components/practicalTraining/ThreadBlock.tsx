import stls from '@/styles/components/practicalTraining/ThreadBlock.module.sass'
import Wrapper from '../layout/Wrapper'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import IconVioletCircle from '../icons/IconVioletCircle'
import parse from 'html-react-parser'
import marked from 'marked'
import TagOrange from '../general/TagOrange'
import ThreadBlockDesc from './ThreadBlockDesc'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import ThreadBlockMobile from './ThreadBlockMobile'

type Props = {
  points: TermPoint[]
}

const ThreadBlock = ({ points }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const renderer = new marked.Renderer()

  renderer.strong = text => {
    return `<span className=${stls.strongText}>${text}</span>`
  }

  marked.setOptions({ renderer })

  return (
    <Wrapper>
      <div className={stls.tagWithTitle}>
        <div className={stls.tag}>
          <TagOrange isWhiteText>Условия</TagOrange>
        </div>
        <h2 className={stls.title}><span>Условия</span> участия в программе</h2>
      </div>
      {isMobileAndTabletLayout ? (
        <ThreadBlockMobile points={points} />
      ) : (
        <ThreadBlockDesc points={points} />
      )}
    </Wrapper>
  )
}

export default ThreadBlock
