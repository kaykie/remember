/**
* Created by apple on 2018/4/21.
*/
<template>
  <div class="page">
    <myList :items = 'items2'></myList>
  </div>
</template>


<script>
  import myList from '../../components/myList.vue'
//  import MD5 from '../../utils/md5'
  export default {
    data() {
      return {
        text:'ffff',
        items2: [
          {
            icon: '',
            url: '../wordList/main',
            title: '单词列表',
            text: ''
          }
          // {
          //   icon: '',
          //   url: '',
          //   title: '个人信息',
          //   text: ''
          // }
        ]
      }
    },
    components: {
      myList
    },
    created(){
//      var appid = '20180420000148353';
//      var key = '3i4I9Df7Ku4z3kiKWxCY';
//      var salt = (new Date).getTime();
//      var query = 'apple';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
//      var from = 'en';
//      var to = 'zh';
//      var str1 = appid + query + salt +key;
//      var sign = MD5(str1);
//      wx.request({
//        url:'http://api.fanyi.baidu.com/api/trans/vip/translate',
//        method:'get',
//        header: {
//          'content-type': 'application/json',
//          'token': "bua+B0Qeh2YMwNED+AN8K41EgFBJcuGwgrIbLHRj5PdWuw339Q9mTy2Tgs9/eZDH" // 默认值
//        },
//        data:{
//          q: query,
//          appid: appid,
//          salt: salt,
//          from: from,
//          to: to,
//          sign: sign
//        },
//        success(res){
//          console.log(res)
//        }
//      })
    },
    // 计算
    computed() {

    },
    methods: {
      handle() {

      }
    }
  }
</script>


<style>

</style>
