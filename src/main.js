import Vue from 'vue'
import './assets/css/weui.css'
Vue.config.productionTip = false

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // pages: ['pages/logs/main', '^pages/index/main'],
    pages: ['^pages/index/main','pages/my/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      /* eslint-disable */
      list: [
        {
        pagePath: 'pages/index/main',
        text: '加单词',
        //iconPath: 'static/images/icon_nav_button.png',
        //selectedIconPath: 'static/images/icon_nav_button.png'
      },
        {
          pagePath: 'pages/my/main',
          text: '个人中心',
          // iconPath: 'static/images/icon_nav_cell.png',
          // selectedIconPath: 'static/images/icon_nav_cell.png'
        }
      ]
    }
  }
}
