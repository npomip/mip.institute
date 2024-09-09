import stls from '@/styles/components/popups/PopupProgram.module.sass'

const PopupLoading = () => {
  return (
    <div className={stls.container}>
      <div id={stls.preloader}>
        <div id={stls.loader}></div>
      </div>
    </div>
  )
}

export default PopupLoading
