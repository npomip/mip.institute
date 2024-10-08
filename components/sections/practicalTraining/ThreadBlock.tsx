import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/practicalTraining/ThreadBlock.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Tag from '@/ui/Tag'
import Wrapper from '@/components/layout/Wrapper'
import ThreadBlockDesc from './ThreadBlockDesc'
import ThreadBlockMobile from './ThreadBlockMobile'

type Props = {
  points: TermPoint[]
}

const ThreadBlock = ({ points }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <Wrapper>
      <div className={stls.tagWithTitle}>
        <div className={stls.tag}>
          <Tag type='orange' isWhiteText>
            Условия
          </Tag>
        </div>
        <h2 className={stls.title}>
          <span>Условия</span> участия в программе
        </h2>
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
