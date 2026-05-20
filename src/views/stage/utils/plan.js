import i18n from '@/i18n'

export const planTypes = [
  { key: 'month_price', labelKey: '每月', label2Key: '月付' },
  { key: 'quarter_price', labelKey: '每季度', label2Key: '季付' },
  { key: 'half_year_price', labelKey: '每半年', label2Key: '半年付' },
  { key: 'year_price', labelKey: '每年', label2Key: '年付' },
  { key: 'two_year_price', labelKey: '每两年', label2Key: '两年付' },
  { key: 'three_year_price', labelKey: '每三年', label2Key: '三年付' },
  { key: 'onetime_price', labelKey: '一次性', label2Key: '一次性付' }
]

export function translatePlanType(type) {
  return {
    ...type,
    label: i18n.t(type.labelKey),
    label2: i18n.t(type.label2Key)
  }
}

/**
 * 根据套餐数据计算价格显示
 * @param {Object} plan 套餐对象
 * @returns
 */
export function getShowPrice(plan) {
  const types = planTypes.filter((item) => plan[item.key] !== null).map(translatePlanType)

  let jsonArray = null
  let matchTagText = ''
  try {
    jsonArray = JSON.parse(plan.content)
  } catch {}

  if (jsonArray) {
    // 说明是json字符串
    const labelObj = jsonArray.find((_) => _.label)?.label
    if (labelObj) {
      matchTagText = `<div class="t0" style="color: ${labelObj.textColor}; background-color: ${labelObj.background}">${labelObj.text}</div>`
    }
  } else {
    // 说明是html字符串
    matchTagText = /<div\s+class="t0.*?".*?>(.*)<\/div>/gi.exec(plan.content)?.[0]
  }
  // matchTagText 是带标签的富文本，匹配出来后，用css隐藏content中写的t0
  const getTagTitle = () => {
    if (matchTagText) {
      return matchTagText
    }
    if (plan.capacity_limit !== null) {
      if (plan.capacity_limit < 10) {
        if (plan.capacity_limit <= 0) {
          return `<div class="t0">${i18n.t('已售罄')}</div>`
        }
        return `<div class="t0">${i18n.t('即将售罄')}</div>`
      }
    }
    return ''
  }

  const tagTitle = getTagTitle()

  return {
    types,
    value: plan[types[0].key], // 取第一个
    label: types[0].label,
    label2: types[0].label2,
    tagTitle
  }
}

/**
 * 根据套餐数据计算显示的套餐内容（因为现在有html格式和json格式）
 * @param {Object} plan 套餐对象
 * @returns
 */
export function getShowContent(plan) {
  let jsonArray = null
  try {
    jsonArray = JSON.parse(plan.content)
  } catch {}

  if (jsonArray) {
    // 说明是json字符串
    const features = jsonArray.filter((_) => _.feature)
    return features
      .map((item) => {
        return `
        <div class="t4">
          <div class="desc">
            <i class="${item.support ? 'gou' : 'cha'}"></i>
            ${item.feature}
          </div>
        </div>
      `
      })
      .join('')
  } else {
    // 说明是html字符串
    return plan.content
  }
}
