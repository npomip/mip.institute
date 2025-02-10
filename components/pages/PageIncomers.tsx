import stls from '@/styles/pages/PageIncomers.module.sass'
import ProgramSelectionTop from '@/components/sections/Incomers/ProgramSelectionTop/ProgramSelectionTop'

// type Props = {
//   incomers: Lectorium
// }

const PageIncomers = ({ incomers }: any) => {
  return (
    <div className={stls.container}>
      <ProgramSelectionTop />
    </div>
  )
}

export default PageIncomers
