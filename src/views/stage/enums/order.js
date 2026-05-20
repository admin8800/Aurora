import Enum from '@/core/utils/enum'

/**
 * 工单级别
 */
export const States = new Enum({
  WAIT_PAY: [0, '待支付'],
  OPENING: [1, '开通中'],
  CANCEL: [2, '已取消'],
  END: [3, '已完成']
})
