
import { isString, isArray, isNumber, isBoolean, isObject } from "../type"

/**
 * 长度校验
 * @param value 
 * @param length 
 * @returns 
 */

export function lengthCheck(value: string, length = 255): boolean {
  if (!isString(value)) {
    return false
  }
  const len = value.length
  return len < length && len >= 1
}

/**
 * 自定义属性key校验
 * @param value 
 * @returns 
 */
export function attrNameCheck (value: string): boolean {
  if (!lengthCheck(value, 99)) {
    return false
  }
  return /^[$a-zA-Z][a-zA-Z0-9_$]{0,}$/.test(value)
}

/**
 * 自定义属性值校验
 * @param value 
 */
export function attrValueCheck (value: any): boolean {

  if (isString(value) || isNumber(value) || isArray(value) || isBoolean(value)) {
    if (isString(value)) {
      if (!lengthCheck(value, 255)) {
        return false
      }
    }
  
    if (isArray(value)) {
      return value.some(o => !lengthCheck(o, 255))
    }

    return true
  }

  return false

}

/**
 * 属性校验
 * @param value 
 */
export function attrCheck (value: any): boolean {
  if (!isObject(value)) {
    return false
  }

  for (const key in value) {
    if (!attrNameCheck(key)) {
      return false
    }
    if (!attrValueCheck(value[key])) {
      return false
    }
  }
  return true
}