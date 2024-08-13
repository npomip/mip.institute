import stls from '@/styles/components/btns/ToggleBtn.module.sass'
import { useState } from 'react'

type Props = {
  onChange: () => void
  checked?: boolean
}

const ToggleBtn = ({ onChange, checked }: Props) => {
  return (
    <label className={stls.switch}>
      <input
        className={stls.input}
        checked={checked}
        type='checkbox'
        onChange={onChange}
      />
      <span className={stls.slider}></span>
    </label>
  )
}

export default ToggleBtn
