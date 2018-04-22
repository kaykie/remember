// import request from '../utils/request';
import config from '../config';

export default class PublicService {

  /**
   * @param key为需要存储的字段
   * @param value 为需要存储的东西,可以为any
   * **/
  static async setStoreage(key, value) {
    await wx.setStorageSync(key, value)
  }

  /**
   * @param key 为需要获取数据的字段
   * **/
  static getStoreage(key) {
    console.log(wx.getStorageSync(key))
    return wx.getStorageSync(key);
  }

  /**
   * 判断数组里是否有两个相同的数据
   * @param arr 需要做判断的数组
   * @return true 有重复的数据  false 没有重复的数据
   */
  static isRepeat(arr) {
    let hash = {};
    let array = [];
    for (let obj of arr) {
        array.push(obj.word)
    }
    for(let i in array){
      if (hash[array[i]])
        return true;
      hash[array[i]] = true;
    }
    return false;
  }

  /**
   * @param 第一个参数给一对象 用于设置modal的相关信息
   * @param handle 为点击确定需要做的事
   * @param cancel 为点击取消需要做的事
   * **/
  static openConfirm({title, content, confirmText = '确定', cancelText = '取消'}, handle, cancel) {
    wx.showModal({
      title,
      content,
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作');
          handle()

        } else {
          cancel()
        }
      }
    });
  }



}
