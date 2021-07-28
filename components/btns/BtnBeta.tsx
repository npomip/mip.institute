import stls from '@/styles/components/btns/BtnBeta.module.sass'

const BtnBeta = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnBeta
