

import sendData from '../sendData'
import fillData from '../fillData'
import { isObject } from '../../utils/type'
import { getSuperProperty } from '../../store/core'
import { attrCheck } from '../../utils/verify'

function track (eventName : string, eventAttrs : object) {
  
  let obj = {}

  if (isObject(eventAttrs)) {
    obj = eventAttrs
  }

  attrCheck(eventAttrs)
  
  // 获取上报数据模块
  const res = fillData(eventName)

  // 合并通用属性
  res.xcontext = Object.assign({}, res.xcontext, getSuperProperty(), obj)

  sendData(res)
  
}

export default track