import stls from '@/styles/components/general/Divider.module.sass'


const Divider = () => {
  return (
    <div className={stls.container}>
      <div className={stls.group}>
        <div className={stls.smallDiamond}></div>
        <div className={stls.bigDiamond}></div>
        <div className={stls.smallDiamond}></div>
      </div>
    </div>
  )
}

export default Divider
