/**
 * sdk配置参数类型
 */

export interface initConfig {
  appkey?: string;
  uploadURL?: string;
  debugMode?: number;
  auto?: boolean;
  autoProfile?: boolean;
  encryptType?: number;
  autoShare?: boolean;
  allowTimeCheck?: boolean;
  maxDiffTimeInterval?: number;
  autoTrack?: boolean;
  autoCompleteURL?: boolean;
  autoPageViewDuration?: boolean;
  $appid?: string;
  $appname?: string;
}


/**
 * 埋点数据类型
 */

export interface xcontextValue {
  $url?: string;
  $is_login?: boolean;
}


export interface buriedPointData {
  appid: string;
  xwho: string;
  xwhat: string;
  xwhen: number;
  xcontext: xcontextValue;
}