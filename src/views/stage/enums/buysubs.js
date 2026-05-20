import Enum from '@/core/utils/enum'

/**
 * 订阅筛选
 */
export const Filtered = new Enum({
  ALL: [0, '全部'],
  PERIOD: [1, '按周期'],
  ONE_TIME: [2, '按流量']
})

/**
 * 优惠券类型
 */
export const CouponEnum = new Enum({
  NUMBER: [1, '折扣金额'],
  PERCENT: [2, '折扣百分比']
})

/**
 * 套餐类型
 */
export const ComboEnum = new Enum({
  UNBUY: [1, '未购买'],
  PERIOD: [2, '周期性订阅'],
  ONE_TIME: [3, '一次性订阅']
})
