<template>
  <div>
    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
      </div>
    </div>
    <navigator v-for="(item,index) in items" :key="index" :url="item.url" class="weui-cell weui-cell_access"
               hover-class="weui-cell_active">
      <div v-if="item.icon" class="weui-cell__hd">
        <image :src="item.icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
      </div>
      <div class="weui-cell__bd">{{item.title}}</div>
      <div class="weui-cell__ft weui-cell__ft_in-access">{{item.text}}</div>
    </navigator>
  </div>
</template>


<script>
  import card from './card.vue'
  import bus from './bus.vue'
  export default {
    data() {
      return {
        userInfo:{}
      }
    },
    components: {
      card
    },
    methods: {
      bindViewTap() {
        const url = '../logs/main';
        wx.navigateTo({url})
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                console.log(res.userInfo);
                this.userInfo = res.userInfo
              }
            })
          }
        })
      }
    },
    updated(){

    },
    mounted() {
      // bus.$on('addHandle',()=>{
      //   this.getUserInfo()
      // });
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    props: ['items'],
  }
</script>


<style lang="less">
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
    text-align: center;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
