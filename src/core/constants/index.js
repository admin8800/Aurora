/**
 * 环境配置
 */
export const ENV_CONFIG = window.EnvConfig

/**
 * 前端根目录
 */
export const STATIC_URL = ENV_CONFIG.staticUrl

/**
 * 服务端根路径（用户配置）
 */
export const SERVER_URL = ENV_CONFIG.serverUrl || window.location.origin

/**
 * 着陆页（用户配置）
 */
export const LAND_PAGE = ENV_CONFIG.landPage

/**
 * 注册时是否显示邀请码（用户配置）
 */
export const SHOW_REG_INVITE = ENV_CONFIG.showRegInvite === 'show'

/**
 * 应用名称（用户配置）
 */
export const APP_NAME = ENV_CONFIG.appName

/**
 * 应用描述（用户配置）
 */
export const APP_DESC = ENV_CONFIG.appDesc

/**
 * 主题模式（用户配置）
 */
export const APP_THEME = ENV_CONFIG.appTheme

/**
 * 主题颜色（用户配置）
 */
export const APP_COLOR = ENV_CONFIG.appColor

/**
 * 应用logo （用户配置）
 */
export const APP_LOGO = ENV_CONFIG.appLogo

/**
 * 应用版本 （用户配置）
 */
export const APP_VERSION = ENV_CONFIG.appVersion

/**
 * ios客户端下载地址 （用户配置）
 */
export const CLIENT_IOS = ENV_CONFIG.clientIOS

/**
 * android客户端下载地址 （用户配置）
 */
export const CLIENT_ANDROID = ENV_CONFIG.clientAndroid

/**
 * windows客户端下载地址 （用户配置）
 */
export const CLIENT_WINDOWS = ENV_CONFIG.clientWindows

/**
 * macos客户端下载地址 （用户配置）
 */
export const CLIENT_MACOS = ENV_CONFIG.clientMacOS

/**
 * openwrt客户端下载地址 （用户配置）
 */
export const CLIENT_OPENWRT = ENV_CONFIG.clientOpenwrt

/**
 * linux客户端下载地址 （用户配置）
 */
export const CLIENT_LINUX = ENV_CONFIG.clientLinux
