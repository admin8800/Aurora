function appendQuery(url, params = {}) {
  const query = Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null && params[key] !== '')
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  if (!query) return url
  return `${url}${url.includes('?') ? '&' : '?'}${query}`
}

export function getSubscribeUrl(subscribe, params = {}) {
  const url = subscribe?.subscribe_url || subscribe?.subscribeUrl
  return url ? appendQuery(url, params) : ''
}
