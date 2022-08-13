import { config } from '../../store/config'
import { $lib } from '../../constant/index'
import getType from '../../utils/type'

interface msgetype {
  key?: string
  value?: any
  code: string | number
  fn?: string
  keyType?: string
}

const errorMessage = {
  'common': '{FN}:Property key invalid, nonsupport value: $lib/$lib_version/$platform/$first_visit_time/$debug/$is_login \n' +
        'current KEY:{KEY}',
  '60001': '{FN}:Property key invalid, support type: String \n' +
        'current key:{KEY}\n' +
        'current keyType:{KEYTYPE}',
  '60002': '{FN}:Property value invalid of key[{KEY}], support type: Number \n' +
        'current value: {VALUE}\n' +
        'current type: {VALUETYPE}',
  '60003': '{FN}:Property value invalid of key[{KEY}], support type: Boolean \n' +
        'current value:{VALUE}\n' +
        'current type: {VALUETYPE}',
  '60004': '{FN}:Property value invalid of key[{KEY}], support type: Array \n' +
        'current value:{VALUE}\n' +
        'current type: {VALUETYPE}',
  '60005': '{FN}:The length of the property[{KEY}] value (string[{VALUE}]) needs to be 1-255 !',
  '60006': 'Please set appkey first.',
  '60007': 'Please set uploadURL first.',
  '60008': 'Send message failed.',
  '60009': '{FN}:The length of the property key (string[{KEY}]) needs to be 1-125 !',
  '600010': '{FN}:The length of the property key (string[{KEY}]) needs to be 1-99 !',
  '600011': '{FN}:[{KEY}] does not conform to naming rules!',
  '600012': '{FN}:Property key invalid, nonsupport value: $lib/$lib_version/$platform/$first_visit_time/$debug/$is_login \n' +
        'current KEY:{KEY}',
  '600013': '{FN}:Property value invalid of key[{KEY}], support type: Array with String as its internal element \n' +
        'current value:{VALUE}\n' +
        'current type: {VALUETYPE}',
  '600016': '{FN}:Property value invalid of key[{KEY}], support type: Object \n' +
        'current value:{VALUE}\n' +
        'current type: {VALUETYPE}',
  '600017': '{FN}:The length of the property key (string[{KEY}]) needs to be 1-255 !',
  '600018': '{FN}:Property value invalid of key[{KEY}] invalid, support type: String \n' +
        'current value:{VALUE}\n' +
        'current type: {VALUETYPE}',
  '600019': '{FN}:The length of the property[{KEY}] value (string[{VALUE}]) needs to be 1-255 !',
  '600020': 'DebugMode only can be 0,1,2',
  '600021': '{FN}:Property value invalid of key[{KEY}], support type: Object, Object.keys length needs to be 1-499 \n' +
        'current length:{VALUE}\n'
}
const successMessage = {
  'common': '',
  '20001': 'Send message success',
  '20002': '{FN}: set success ({VALUE})',
  '20003': '{FN}:({VALUE}) delete success',
  '20004': '{FN}:clear success',
  '20005': '{FN}:reset success',
  '20006': 'set appkey success. current appkey : {VALUE}',
  '20007': 'Init Analysys ' + $lib + ' sdk success, version : {VALUE}',
  '20008': 'set uploadURL success. current uploadURL : {VALUE}',
  '20009': '{FN}:[{KEY}] : get failed',
  '20010': '{FN}:[{KEY}] : get success. ({VALUE})',
  '20011': '{FN}:({VALUE}) delete failed',
  '20012': 'Send Message to Server: {KEY} \n' +
        'data:{VALUE}',
  '20013': "收到服务器的时间: {VALUE} \n" +
        "本地时间: {KEY} \n" +
        "时间相差:  {FN} \n" +
        "数据将会进行时间校准",
  '20014': 'aliasID already bound'
}

export function successLog (opt: msgetype) {
  if (config.debugMode === 1 || config.debugMode === 2) {
    const msgTemp = successMessage[opt.code] || successMessage.common
    const showMsg = msgTemp.replace(/{FN}/, opt.fn).replace(/{KEY}/g, opt.key || '').replace(/{VALUE}/g, JSON.stringify(opt.value))
    console.log(showMsg)
  }
}


export function errorLog (opt: msgetype) {
  const msgTemp = errorMessage[opt.code] || errorMessage.common;
  const showMsg = msgTemp.replace(/{FN}/g, opt.fn || '')
    .replace(/{KEY}/g, JSON.stringify(opt.key || ''))
    .replace(/{VALUE}/g, JSON.stringify(opt.value))
    .replace(/{VALUETYPE}/g, getType(opt.value))
    .replace(/{KEYTYPE}/g, getType(opt.key))
  if (config.debugMode === 1 || config.debugMode === 2) {
    console.warn(showMsg)
  }
}