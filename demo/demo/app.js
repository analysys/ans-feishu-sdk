//app.js
let AnalysysAgent = require('./sdk/AnalysysAgent_FS_SDK.min.js') //基础版本 sdk
let AnalysysEncryption = require('./sdk/AnalysysAgent_encryption.min.js') //加密板块，目前与sdk分开，为了缩小sdk的体积。需要的话单独引入。
AnalysysAgent.encrypt = AnalysysEncryption

// es6 版本
// import AnalysysAgent from  './sdk/AnalysysAgent_WX_SDK.es6.min.js';
// import * as AnalysysEncryption from  './sdk/AnalysysAgent_encryption.es6.min.js';
// AnalysysAgent.encrypt = AnalysysEncryption;   //加密模块的方法赋值给AnalysysAgent，方便调用。

AnalysysAgent.debugMode = 2
// AnalysysAgent.appkey = 'sdktest201'
// AnalysysAgent.uploadURL = 'https://arkpaastest.analxysys.cn:4089'
AnalysysAgent.appkey = '2d01eb66efd95d2c'
AnalysysAgent.uploadURL = 'https://uba-up.analysysdata.com'
AnalysysAgent.encryptType = 1 //使用加密文件的时候 放开赋值。（直接放开不会报错）
AnalysysAgent.autoShare = true

// AnalysysAgent.autoProfile = false;

AnalysysAgent.auto = true

// 时间校准
AnalysysAgent.allowTimeCheck = true
// AnalysysAgent.maxDiffTimeInterval = 10

AnalysysAgent.autoTrack = true
AnalysysAgent.autoCompleteURL = false
AnalysysAgent.$appname = 'test_appname'
AnalysysAgent.$appid = 'test_app_id'

AnalysysAgent.onReady = function(config) {
  console.log('sdk已准备就绪')
}

AnalysysAgent.onBeforeStartUp = function (res) {
  console.log('开始发送预制启动事件')
  console.log(res)
}
AnalysysAgent.onAfterStartUp = function (res) {
  console.log('预制启动事件成功')
  console.log(res)
}

// AnalysysAgent.alias('abc')

// AnalysysAgent.registerSuperProperties({})

// console.log(AnalysysAgent.registerSuperProperties)

App({
  onLaunch: function(options) {
    AnalysysAgent.pageView
    console.log('aaaaaa')
    AnalysysAgent.registerSuperProperty('ddd', 9999)
    // AnalysysAgent.identify('identy1111111', false)
    // AnalysysAgent.alias("1")
    // AnalysysAgent.pageProperty({'page1':'property1'})

    // AnalysysAgent.pageView('test', {username: 'hry'})

    // console.log('APP---onLaunch--->', options)
    if (options.shareTicket) {
      wx.getShareInfo({
        shareTicket: options.shareTicket,
        success: function(res) {
          //解密res.encryptedDat
          // AnalysysAgent.appProperty({ 'openGId': 123256465 })
        },
      })
    }
  },
  onShow: function(options) {
    console.log('APP---onShow--->', options)
    // AnalysysAgent.appStart(options)
    // if (options.shareTicket) {
    //   wx.getShareInfo({
    //     shareTicket: options.shareTicket,
    //     success: function (res) {
    //       //解密res.encryptedDat
    //       console.log('获取成功--->', res)
    //       // AnalysysAgent.appProperty({ 'openGId': 123256465 })
    //     }
    //   })
    // }

    // AnalysysAgent.profileAppend('Movies', '霸王别姬')
    // let profies = {
    //   age: 20,
    //   integral: 200,
    // }
    // AnalysysAgent.profileIncrement(profies)
  },
  globalData: {
    userInfo: null,
  },
})
