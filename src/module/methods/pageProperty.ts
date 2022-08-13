
import { successLog, errorLog } from '../printLog'
import { setPageProperty } from '../../store/pageProperty'
import { attrCheck } from '../../utils/verify'

/**
 * 注册页面自动采集自定义属性
 */
export function pageProperty(properties: object) {
  if (attrCheck(properties)) {
    setPageProperty(properties)
    successLog({
      fn: '$pageProperty',
      code: 20002,
      value: properties
    })
  } else {
    errorLog({
      fn: '$pageProperty',
      code: 600016,
      value: properties
    })
  }
}