

import sendData from '../sendData'
import fillData from '../fillData'
import { lengthCheck, attrCheck } from '../../utils/verify/index'
import { getSuperProperty } from '../../store/core'
import { getPageProperty } from '../../store/pageProperty'
import { eventAttribute } from '../../store/eventAttribute'

function pageView (pageName: string, properties: object) {
  
  let userObj = {}
  const argLen = arguments.length
  if (argLen) {
    if (lengthCheck(pageName)) {
      userObj['$title'] = pageName
    }
    if (attrCheck(properties)) {
      userObj = Object.assign({}, properties, userObj)
    }
  }

  // 获取上报数据模块
  const res = fillData('$pageview')

  // 记录浏览页面时间
  eventAttribute.pageview.xwhen = res.xwhen

  // 合并通用属性 // 绑定页面属性 // 绑定传入的属性
  res.xcontext = Object.assign({}, res.xcontext, getSuperProperty(), getPageProperty(), userObj)
  
  sendData(res)
}

export default pageView