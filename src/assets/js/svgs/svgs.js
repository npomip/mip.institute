import { phone } from './icons/phone'
import { address } from './icons/address'
import { vk } from './icons/vk'
import { fb } from './icons/fb'
import { yt } from './icons/yt'
import { check } from './icons/check'
import { pointerRight } from './icons/pointer-right'
import { play } from './icons/play'
import { whatsapp } from './icons/whatsapp'
import { telegram } from './icons/telegram'

const insertSvgsTo = (svg, elsClass) => {
  if (svg && elsClass) {
    const els = document.querySelectorAll(`.${elsClass}`)
    els.forEach((el) => {
      el.innerHTML = svg
    })
  }
}

const populateSvgs = () => {
  insertSvgsTo(phone, 'phone-icon')
  insertSvgsTo(address, 'address-icon')
  insertSvgsTo(vk, 'sm-vk')
  insertSvgsTo(fb, 'sm-fb')
  insertSvgsTo(yt, 'sm-yt')
  insertSvgsTo(check, 'check-icon')
  insertSvgsTo(pointerRight, 'pointer-right-icon')
  insertSvgsTo(play, 'play-icon')
  insertSvgsTo(whatsapp, 'sm-whatsapp')
  insertSvgsTo(telegram, 'sm-telegram')
}

populateSvgs()

export { populateSvgs }
