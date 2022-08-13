
import { successLog } from '../printLog'
import { attrCheck } from '../../utils/verify'
import { setSuperProperty, getSuperProperty as getSuperAttrs, delSuperProperty } from '../../store/core'
 
/**
 * 设置单个通用属性
 * @param name string
 * @param value string  number  boolean Array<string>
 */
export function registerSuperProperty (name: string, value: string | number | boolean | Array<string>) {
  const obj = {
    [name]: value
  }

  if (!attrCheck(obj)) {
    return false
  }

  setSuperProperty(obj)
  
  successLog({
    fn: '$registerSuperProperty',
    code: 20002,
    value: obj
  })
}

/**
 * 设置多个属性
 * @param superProperty 属性
 * @returns 
 */
export function registerSuperProperties (superProperty: object) {

  if (!attrCheck(superProperty)) {
    return false
  }

  setSuperProperty(superProperty)

  successLog({
    fn: '$registerSuperProperties',
    code: 20002,
    value: superProperty
  })
}

/**
 * 获取单个通用属性
 */
export function getSuperProperty (superPropertyName: string) {
  return getSuperAttrs(superPropertyName)
}

/**
 * 获取所有通用属性
 */
export function getSuperProperties () {
  return getSuperAttrs()
}


/**
 * 删除单个属性
 * @param superPropertyName 属性名称
 */
export function unRegisterSuperProperty (superPropertyName: string) {

  delSuperProperty(superPropertyName)

  successLog({
    fn: '$unRegisterSuperProperty',
    code: 20003,
    value: superPropertyName
  })
}

/**
 * 删除所有属性
 */
export function clearSuperProperties () {
  delSuperProperty()
  successLog({
    fn: '$clearSuperProperties',
    code: 20004
  })
}