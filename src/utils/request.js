/**
 * Created by apple on 2018/4/20.
 */
require('es6-promise').polyfill();
import 'isomorphic-fetch';
import {message} from 'antd';
import Util from './Util';
import config from '../config';
function parseJSON (response) {
  return response.json();
}
function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function encodeUriQuery (val, pctEncodeSpaces) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}
function serializeValue (v) {
  if (Util.isObject(v)) {
    return Util.isDate(v) ? v.toISOString() : JSON.stringify(v);
  }
  return v;
}

/**
 * 将get参数拼接
 * @param params
 * @returns {*}
 */
function paramSerializer (params) {
  if (!params) return '';
  var urlPart = [];
  for (let k in params) {
    let value = params[k];
    if (value === null || Util.isUndefined(value)) continue;
    if (Util.isArray(value)) {
      for (let i = 0, l = value.length; i < l; i++) {
        urlPart.push(encodeUriQuery(k) + '=' + encodeUriQuery(serializeValue(value[i])))
      }
    } else {
      urlPart.push(encodeUriQuery(k) + '=' + encodeUriQuery(serializeValue(value)))
    }
  }
  return urlPart.join('&')
}


function transformRequestData (data) {
  let obj = deleteUndefindeProps(data);
  return Util.isObject(obj) ? JSON.stringify(obj) : obj
}

function deleteUndefindeProps (Obj) {
  var newObj;
  if (Obj instanceof Array) {
    newObj = [];  // 创建一个空的数组
    var i = Obj.length;
    while (i--) {
      newObj[i] = deleteUndefindeProps(Obj[i]);
    }
    return newObj;
  } else if (Obj instanceof Object) {
    newObj = {};  // 创建一个空对象
    for (var k in Obj) {  // 为这个对象添加新的属性
      newObj[k] = deleteUndefindeProps(Obj[k]);
    }
    return newObj;
  } else {
    return Util.isUndefined(Obj) ? null : Obj;
  }
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request (options) {

  if (!Util.isObject(options)) {
    throw new Error('Http request configuration must be an object');
  }
  if (!Util.isString(options.url)) {
    throw new Error('Http request configuration url must be a string');
  }
  if (options.headers && !Util.isObject(options.headers)) {
    throw new Error('Http request headers must be a string');
  }
  const defaultOpt = {method: 'GET'};
  let params = paramSerializer(options.params);
  if (params) options.url = `${options.url}?${params}`;
  let opt = {};
  for (let k in options) {
    if (k !== 'params') {
      opt[k] = options[k];
    }
  }

  opt.headers = opt.headers || {};
  var headers = new Headers({
    'Accept': 'application/json, text/plain, */*',
    "Content-Type": "application/json;charset=UTF-8",
    ...opt.headers
  });

  opt.headers = headers;
  opt.credentials = 'include';  // 发送请求时带cookie
  options.url = config.publicUrl + options.url;
  opt.body = transformRequestData(opt.data);
  // 请求地址加入公共路径
  return fetch(options.url, opt)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      return data
    })
    .catch(err => ({err}));
}
