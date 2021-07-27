import stls from '@/styles/components/btns/BtnAlpha.module.sass'

const BtnAlpha = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnAlpha
