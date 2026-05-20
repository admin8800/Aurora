import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ls, { Language } from '@/core/utils/ls'

Vue.use(VueI18n)

const { zhCN, zhTW, enUS } = window.langs
const langs = ['zhCN', 'zhTW', 'enUS']

export function applyLangClass(lang) {
  langs.forEach((item) => document.body.classList.remove(item))
  document.body.classList.add(lang)
}

export function getLang(spliter = '') {
  const getEnvLang = () => {
    const lang = (navigator.language || navigator.browserLanguage).replace(/[-_]/g, '').toLowerCase()
    if (lang.includes('zhcn')) {
      return 'zhCN'
    } else if (lang.includes('zhtw')) {
      return 'zhTW'
    } else {
      return 'enUS'
    }
  }
  const lang = ls.get(Language) || getEnvLang()
  applyLangClass(lang)
  return lang.substring(0, 2) + spliter + lang.substring(2)
}

export default new VueI18n({
  locale: getLang(),
  silentTranslationWarn: true,
  messages: {
    zhCN,
    zhTW,
    enUS
  }
})
