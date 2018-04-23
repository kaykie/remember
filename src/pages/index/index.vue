<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->

  <!--<div class="userinfo" @click="bindViewTap">-->
  <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
  <!--<div class="userinfo-nickname">-->
  <!--<card :text="userInfo.nickName"></card>-->
  <!--</div>-->
  <!--</div>-->

  <!--<div class="usermotto">-->
  <!--<div class="user-motto">-->

  <!--</div>-->
  <!--</div>-->

  <!--<form class="form-container">-->
  <!--<input type="text" class="form-control" v-model="motto" placeholder="v-model" />-->
  <!--<input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />-->
  <!--</form>-->
  <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  <!--<button class="weui-btn" size="small" open-type="share" type="default">click</button>-->
  <!--<div class="weui-cell">-->
  <!--<div class="weui-cell__hd">-->
  <!--<image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>-->
  <!--</div>-->
  <!--<div class="weui-cell__bd">标题文字</div>-->
  <!--<div class="weui-cell__ft">说明文字</div>-->
  <!--</div>-->
  <!--</div>-->
  <div class="page">
    <form action="" @submit="submit">
      <inputSearch :inputName="word" @inputHandle='inputValueHandle'></inputSearch>
      <xnwInput :inputName="explain"></xnwInput>

      <button type="primary" form-type="submit">保存</button>
    </form>
  </div>

</template>

<script>
  //  import card from '@/components/card'
  import inputSearch from '@/components/inputSearch.vue'
  import xnwInput from '@/components/input.vue'
  import PubliceService from '../../service/PublicService'

  export default {
    data() {
      return {
        inputShowed: false,
        inputVal: '',
        word: 'word',
        explain: 'explain'
      }
    },
    components: {
      inputSearch,
      xnwInput,
    },
    methods: {
      inputValueHandle(value) {
        console.log(value)
      },
      submit(e) {
        console.log(e);
        // wx.removeStorage('words');
        let array = PubliceService.getStoreage('words') || [];
        let value = e.target.value;
        let valueObj = value ? {[value.word]: value.explain}:{};
        for (let i = 0; i < array.length; i++) {
          if(array[i][value.word]){
            PubliceService.openConfirm({title: '单词有重复', content: '您输入的单词与之前存储的有冲突,是否替换?'}, () => {
              array[i][value.word] = value.explain;
              PubliceService.setStoreage('words', PubliceService.transformArrayData(array,false,true))
            });
            return;
          }
        }
        array.push(valueObj);
        PubliceService.setStoreage('words', PubliceService.transformArrayData(array,false,true))
      }
    }
  }
  //    data () {
  //      return {
  //        motto: 'Hello World',
  //        userInfo: {}
  //      }
  //    },
  //    components: {
  //      card
  //    },
  //    methods: {
  //      bindViewTap () {
  //        const url = '../logs/main'
  //        wx.navigateTo({url})
  //      },
  //      getUserInfo () {
  //        // 调用登录接口
  //        wx.login({
  //          success: () => {
  //            wx.getUserInfo({
  //              success: (res) => {
  //                this.userInfo = res.userInfo
  //              }
  //            })
  //          }
  //        })
  //      },
  //      clickHandle (msg, ev) {
  //        console.log('clickHandle:', msg, ev)
  //      }
  //    },
  //    created () {
  //      // 调用应用实例的方法获取全局数据
  //      this.getUserInfo()
  //    }
</script>

<style lang="less" scoped>
  .xnw-index {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    .weui-search-bar__input {
      height: 90 rpx;
      line-height: 90 rpx;
    }
    .weui-search-bar__cancel-btn, .weui-icon-clear, .weui-search-bar__box {
      line-height: 90 rpx;
    }
    .weui-search-bar__label {
      height: 90 rpx;
      line-height: 90 rpx;
    }

  }

  .searchbar-result {
    margin-top: 0;
    font-size: 14px;
  }

  .searchbar-result:before {
    display: none;
  }

  .weui-cell {
    padding: 12px 15px 12px 35px;
  }
</style>
