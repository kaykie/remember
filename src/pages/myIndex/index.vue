<template>
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
  import inputSearch from '../../components/inputSearch.vue'
  import xnwInput from '@/components/input.vue'
  import PubliceService from '../../service/PublicService'
//  import { youdao, baidu, google } from 'translation.js'
  import 'translation.js/chrome-youdao'
  export default {
    data() {
      return {
        inputShowed: false,
        inputVal: '',
        word: 'word',
        explain: 'explain'
      }
    },
    created(){
//      console.log(youdao);
//      google.translate({
//        text: 'test',
//        from: 'en',
//        to: 'zh-CN'
//      })
//        .then(res=>{
//          console.log(res)
//        })
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
</script>

<style lang="less" scoped>
  .xnw-index {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    .weui-search-bar__input {
      height: 90rpx;
      line-height: 90rpx;
    }
    .weui-search-bar__cancel-btn, .weui-icon-clear, .weui-search-bar__box {
      line-height: 90rpx;
    }
    .weui-search-bar__label {
      height: 90rpx;
      line-height: 90rpx;
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
