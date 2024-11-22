window.onRoistatModuleLoaded = function () {
  window.roistat.registerAbTestCallback(4, function (variant) {
    switch (variant) {
      case 'old':
        localStorage.setItem('AB', 'askQuestion')
        break
      case 'new':
        localStorage.setItem('AB', 'getProgram')
        break
    }
  })
}
