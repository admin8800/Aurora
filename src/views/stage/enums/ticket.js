import Enum from '@/core/utils/enum'

/**
 * 工单级别
 */
export const Levels = new Enum({
  LOW: [0, '低'],
  NORMAL: [1, '中'],
  HIGH: [2, '高']
})

/**
 * 工单状态
 */
export const States = new Enum({
  HANDLING: [0, '待回复'],
  CLOSED: [1, '已关闭']
})
