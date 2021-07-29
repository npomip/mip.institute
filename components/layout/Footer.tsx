import stls from '@/styles/components/layout/Footer.module.sass'
import { number } from '@/data/contact'
import { BtnVk } from '@/components/btns'

const Footer = () => {
  return (
    <footer className={stls.container}>
      <div className={stls.numbers}>
        <a href={number.href} className={stls.number}>
          {number.val}
        </a>
        <a href={number.href} className={stls.number}>
          {number.val}
        </a>
      </div>
      <div className={stls.sm}>
        <BtnVk dark />
      </div>
    </footer>
  )
}

export default Footer
