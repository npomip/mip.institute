window.onRoistatModuleLoaded = function () {
  window.roistat.registerAbTestCallback(4, function (variant) {
    switch (variant) {
      case 'old':
        localStorage.setItem('AB', 'old')
        break
      case 'new':
        localStorage.setItem('AB', 'new')
        break
    }
  })
}
