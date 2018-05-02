// import request from '../utils/request';
import config from '../config';

export default class PublicService {

  /**
   * @param key为需要存储的字段
   * @param value 为需要存储的东西,可以为any
   * **/
  static setStoreage(key, value) {
    wx.setStorageSync(key, value)
  }

  /**
   * @param key 为需要获取数据的字段
   * **/
  static getStoreage(key) {
    console.log(wx.getStorageSync(key));
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
    for (let i in array) {
      if (hash[array[i]])
        return true;
      hash[array[i]] = true;
    }
    return false;
  }

  static returnDegree(score) {
    let degree = '';
    if (score < 10)
      return config.degree.num1;
    else if (score < 30)
      return config.degree.num2;
    else if (score < 80)
      return config.degree.num3;
    else if (score < 150)
      return config.degree.num4;
    else if (score < 250)
      return config.degree.num5;
    else if (score < 400)
      return config.degree.num6;
    else if (score < 1000)
      return config.degree.num7;
  }

  /**
   * @param data 需要转换结构的源数据
   * @param needColNum 需要增加table序号列数据
   * @param needKey 需要增加唯一标识key
   * @param currentPage 当前页
   * @param pageSize 每页数据数目
   * @returns {*} 转换后的数据
   */
  static transformArrayData(data, needColNum, needKey, currentPage, pageSize) {
    // 需要添加table序号
    if (needColNum) {
      for (let i = 0; i < data.length; i++) {
        // 有分页
        if (currentPage && pageSize) {
          data[i]['num'] = pageSize * (currentPage - 1) + i + 1;
          // 无分页
        } else {
          data[i]['num'] = i + 1;
        }
      }
      // 需要添加唯一标识key
    }
    // 添加Key
    if (needKey) {
      for (let i = 0; i < data.length; i++) {
        // 若数据不存在key字段,则增加唯一标识key
        if (!data[i]['key']) data[i]['key'] = i;
      }
    }
    if (!needColNum && !needColNum) {
      console.info('检查transformArrayData方法参数(needColNum,needKey),返回数据结构未改变');
    }
    return data;
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
          if (!cancel) return;
          cancel()
        }
      }
    });
  }

  /**
   * 防抖
   * @param delta 为延迟的秒数
   * @param fun 为需要调用的函数
   * **/
  static debounceLog(delta, fun) {
    let timeoutID = null;
    if (timeoutID) clearTimeout(timeoutID);  // reset timer
    timeoutID = setTimeout(function () {
      fun();
    }, delta);
  }

  /**
   * 节流
   * **/

  static throttle(fn, interval2) {
    let last;
    let timer;
    let interval = interval2 || 200;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn();
      }, interval);
    } else {
      last = now;
      fn();
    }
  }
}
