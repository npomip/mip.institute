import TopBlock from './TopBlock/TopBlock'
import BottomBlock from './BottomBlock/BottomBlock'

type StubProps = {
  onShowPast: () => void
}
const Stub = ({ onShowPast }: StubProps) => {
  return (
    <>
      <TopBlock onShowPast={onShowPast} />
      <BottomBlock />
    </>
  )
}

export default Stub
