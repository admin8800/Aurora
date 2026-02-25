/*!
 * 判断宿主环境的函数集合
 * Copyright(c) 2019-Present SME All rights reserved
 * author: zengjian
 */
import device from 'current-device'
const uaString = window.navigator.userAgent || ''

/**
 * firefox: (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0
 * chrome: (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36
 * edge: (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60
 * opera: (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36 OPR/73.0.3856.260
 * ie11: (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko
 * ie10: (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
 * safari: (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15
 */

/**
 * 判断当前是否为电脑端
 * @return {Boolean}
 */
export function isDesktop() {
  return device.desktop()
}

/**
 * 判断当前是否为手机端
 * @return {Boolean}
 */
export function isMobile() {
  return device.mobile()
}

/**
 * 判断当前是否为平板端
 * @return {Boolean}
 */
export function isTablet() {
  return device.tablet()
}

/**
 * 判断当前是否为电视端
 * @return {Boolean}
 */
export function isTelevision() {
  return device.television()
}

/**
 * 判断操作系统是否为苹果移动操作系统iOS
 * @return {Boolean}
 */
export function isIOS() {
  return device.ios()
}

/**
 * 判断操作系统是否为谷歌移动操作系统Android
 * @return {Boolean}
 */
export function isAndroid() {
  return device.android()
}

/**
 * 判断操作系统是否为微软桌面操作系统windows
 * @return {Boolean}
 */
export function isWindows() {
  return device.windows()
}

/**
 * 判断操作系统是否为苹果桌面操作系统macos
 * @return {Boolean}
 */
export function isMacos() {
  return device.macos()
}

/**
 * 判断手机类型是否为苹果iPad
 * @return {Boolean}
 */
export function isIPad() {
  return device.ipad()
}

/**
 * 判断手机类型是否为苹果手机iPhone
 * @return {Boolean}
 */
export function isIPhone() {
  return device.iphone()
}

/**
 * 判断手机类型是否为苹果手机iPhoneX
 * @return {Boolean}
 */
export function isIPhoneX() {
  return isIPhone() && window.screen.height === 812 && window.screen.width === 375
}

/**
 * 判断浏览器是否为微信内置浏览器
 * @return {Boolean}
 */
export function isWeixin() {
  return uaString.includes('MicroMessenger')
}

/**
 * 判断浏览器是否为谷歌浏览器Chrome
 * @return {Boolean}
 */
export function isChrome() {
  return uaString.includes('Chrome/') && !isEdge() && !isOpera()
}

/**
 * 判断浏览器是否为火狐浏览器Firefox
 * @return {Boolean}
 */
export function isFirefox() {
  return uaString.includes('Gecko/')
}

/**
 * 判断浏览器是否为苹果浏览器Safari
 * @return {Boolean}
 */
export function isSafari() {
  return uaString.includes('Version/')
}

/**
 * 判断浏览器是否为Opera浏览器
 * @return {Boolean}
 */
export function isOpera() {
  return uaString.includes('OPR/')
}

/**
 * 判断浏览器是否为IE浏览器
 * @return {Boolean}
 */
export function isIE() {
  return uaString.includes('Trident/')
}

/**
 * 判断浏览器是否为Edge浏览器
 * @return {Boolean}
 */
export function isEdge() {
  return uaString.includes('Edg/')
}

/**
 * 判断当前是否为横屏
 * @return {Boolean}
 */
export function isLandscape() {
  return device.landscape()
}

/**
 * 判断当前是否为竖屏
 * @return {Boolean}
 */
export function isPortrait() {
  return device.portrait()
}
