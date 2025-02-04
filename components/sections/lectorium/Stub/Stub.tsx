import TopBlock from './TopBlock/TopBlock'
import BottomBlock from './BottomBlock/BottomBlock'

type StubProps = {
  onClick: () => void
}
const Stub = ({ onClick }: StubProps) => {
  return (
    <>
      <TopBlock onClick={onClick} />
      <BottomBlock />
    </>
  )
}

export default Stub
