import * as darkreader from 'darkreader'

const theme = {
  brightness: 100,
  contrast: 90,
  sepia: 10
}

const fixes = {
  ignoreImageAnalysis: ['img', 'svg', 'canvas', 'video', '.lottie', '.world', '.earth']
}

export function enableDarkMode() {
  darkreader.enable(theme, fixes)
  document.body.classList.add('is-darkmode')
}

export function disableDarkMode() {
  darkreader.disable()
  document.body.classList.remove('is-darkmode')
}

export function isDarkModeEnabled() {
  return darkreader.isEnabled()
}
