import stls from '@/styles/components/btns/BtnDelta.module.sass'

const BtnDelta = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnDelta
