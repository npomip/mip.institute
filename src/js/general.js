const btnsRipple = document.querySelectorAll('.btn')

const hide = (el) => {
  el.classList.add('hiding')
  setTimeout(() => {
    el.classList.remove('hiding')
    el.classList.add('hidden')
  }, 300)
}

const addRipplesToBtns = (selectedClass = null) => {
  if (selectedClass !== null) {
    selectedClass.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const circle = document.createElement('span')
        circle.classList.add('btn__circle')
        circle.style.top = y + 'px'
        circle.style.left = x + 'px'

        this.appendChild(circle)

        setTimeout(() => {
          circle.remove()
        }, 500)
      })
    })
  }
}

// const showHiddenForm = (e) => {
//   const hiddenForm = document.getElementById('js-hidden-form')
//   hiddenForm.classList.add('show')
//   hide(e.target)
// }

const closePopUpForm = (e) => {
  const popUpForm = document.getElementById('js-popup-form')
  const closeBtn = document.getElementById('js-pop-up-close-btn')
  const popUpFormContent = document.getElementById('js-popup-form__content')
  if (
    (!popUpFormContent.contains(e.target) && e.target !== popUpFormContent) ||
    closeBtn.contains(e.target)
  ) {
    hide(popUpForm)
    popUpForm.removeEventListener('click', closePopUpForm)
  }
}

const showPopUpForm = () => {
  const popUpForm = document.getElementById('js-popup-form')
  popUpForm.classList.remove('hidden')
  popUpForm.addEventListener('click', closePopUpForm)
}

addRipplesToBtns(btnsRipple)
