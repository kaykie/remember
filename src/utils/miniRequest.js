/**
 * Created by apple on 2018/4/26.
 */
import MD5 from './md5'

export default function (params) {
  var appid = '20180420000148353';
  var key = '3i4I9Df7Ku4z3kiKWxCY';
  var salt = (new Date).getTime();
  var query = params;
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
  var from = 'en';
  var to = 'zh';
  var str1 = appid + query + salt +key;
  var sign = MD5(str1);
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate', //仅为示例，并非真实的接口地址
      data: {
        q: query,
        appid: appid,
        salt: salt,
        from: from,
        to: to,
        sign: sign
      },
      method:'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        resolve(res)
      },
      fail:function (err) {
        reject(err)
      }
    })

  })

}
