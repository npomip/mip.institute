import stls from '@/styles/components/btns/ToggleBtn.module.sass'
import { useState } from 'react'

const ToggleBtn = ({ onChange, checked }) => {
  return (
    <label className={stls.switch}>
      <input className={stls.input} checked={checked} type='checkbox' onChange={onChange} />
      <span className={stls.slider}></span>
    </label>
  )
}

export default ToggleBtn
