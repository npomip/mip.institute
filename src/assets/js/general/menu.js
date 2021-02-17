import { handleErr } from '../utils/errorHandler'

const closeMenu = () => {
  try {
    const menu = document.getElementById('js-mob-menu-screen'),
      humBtn = document.getElementById('js-hum-btn'),
      closeBtn = document.getElementById('js-close-menu-btn')

    closeBtn.removeEventListener('click', closeMenu)
    menu.classList.add('hidden')
    humBtn.addEventListener('click', openMenu)

  } catch (err) {
    handleErr(err)
  }
}

const menuIsOpened = () => {
  try {
    const closeBtn = document.getElementById('js-close-menu-btn')

    closeBtn.addEventListener('click', closeMenu)

  } catch (err) {
    handleErr(err)
  }
}

const openMenu = () => {
  try {
    const menu = document.getElementById('js-mob-menu-screen'),
      humBtn = document.getElementById('js-hum-btn')

    menu.classList.remove('hidden')
    humBtn.removeEventListener('click', openMenu)
    menuIsOpened()

  } catch (err) {
    handleErr(err)
  }
}

const makeMenu = () => {
  try {
    const humBtn = document.getElementById('js-hum-btn')

    humBtn.addEventListener('click', openMenu)

  } catch (err) {
    handleErr(err)
  }
}

makeMenu()