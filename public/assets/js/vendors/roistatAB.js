window.onRoistatModuleLoaded = function () {
  window.roistat.registerAbTestCallback(5, function (variant) {
    switch (variant) {
      case 'old004':
        localStorage.setItem('AB', 'old')
        break
      case 'new004':
        localStorage.setItem('AB', 'new')
        break
    }
  })
}
