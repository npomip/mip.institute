window.onRoistatModuleLoaded = function () {
  window.roistat.registerAbTestCallback(3, function (variant) {
    switch (variant) {
      case '2buttons':
        localStorage.setItem('AB', '2buttons')
        break
      case '1button':
        localStorage.setItem('AB', '1button')
        break
    }
  })
}
