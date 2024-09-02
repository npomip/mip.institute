window.onRoistatModuleLoaded = function () {
  window.roistat.registerAbTestCallback(1, function (variant) {
    switch (variant) {
      case 'price':
        localStorage.setItem('AB', 'price')
        break
      case 'noprice':
        localStorage.setItem('AB', 'noprice')
        break
    }
  })
}
