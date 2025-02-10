import stls from '@/styles/pages/PageIncomers.module.sass'
import ProgramSelectionTop from '@/components/sections/Incomers/ProgramSelectionTop/ProgramSelectionTop'
import OurPossibilities from '../sections/Incomers/OurPossibilities/OurPossibilities'

// type Props = {
//   incomers: Lectorium
// }

const PageIncomers = ({ incomers }: any) => {
  return (
    <div className={stls.container}>
      <ProgramSelectionTop />
      <OurPossibilities data={incomers.ourPossibilities} />
    </div>
  )
}

export default PageIncomers
