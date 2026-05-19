import device from 'current-device'

const uaString = window.navigator.userAgent || ''

export function isDesktop() {
  return device.desktop()
}

export function isMobile() {
  return device.mobile()
}

export function isTablet() {
  return device.tablet()
}

export function isTelevision() {
  return device.television()
}

export function isIOS() {
  return device.ios()
}

export function isAndroid() {
  return device.android()
}

export function isWindows() {
  return device.windows()
}

export function isMacos() {
  return device.macos()
}

export function isIPad() {
  return device.ipad()
}

export function isIPhone() {
  return device.iphone()
}

export function isIPhoneX() {
  return isIPhone() && window.screen.height === 812 && window.screen.width === 375
}

export function isWeixin() {
  return uaString.includes('MicroMessenger')
}

export function isChrome() {
  return uaString.includes('Chrome/') && !isEdge() && !isOpera()
}

export function isFirefox() {
  return uaString.includes('Gecko/')
}

export function isSafari() {
  return uaString.includes('Version/')
}

export function isOpera() {
  return uaString.includes('OPR/')
}

export function isIE() {
  return uaString.includes('Trident/')
}

export function isEdge() {
  return uaString.includes('Edg/')
}

export function isLandscape() {
  return device.landscape()
}

export function isPortrait() {
  return device.portrait()
}
