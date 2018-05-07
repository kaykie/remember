<template>
  <div class="page">
    <form action="" @submit="submit" @reset="resetForm">
      <inputSearch :input-value="inputValue" :inputName="word" @inputHandle='inputValueHandle'></inputSearch>
      <xnwInput :input-value="textareaValue" :inputName="explain"></xnwInput>
      <button type="primary" form-type="submit">保存</button>
    </form>
  </div>
</template>

<script>
  //  import card from '@/components/card'
  import inputSearch from '../../components/inputSearch.vue'
  import xnwInput from '@/components/input.vue'
  import PubliceService from '../../service/PublicService'
  import bus from '../../components/bus.vue'
  import request from '../../utils/miniRequest'
  export default {
    data() {
      return {
        inputShowed: false,
        word: 'word',
        explain: 'explain',
        inputValue:'',
        textareaValue:''
      }
    },
    created(){
      // request('computer')
      //   .then(res =>{
      //     console.log(res)
      //   })
    },
    components: {
      inputSearch,
      xnwInput,
    },
    methods: {
      inputValueHandle(value) {
        console.log(value)
      },
      resetFrom(e){
        console.log(e)
      },
      submit(e) {
        console.log(e);
        if(!e.target.value){
          return
        }
        // wx.removeStorage('words');
        let array = PubliceService.getStoreage('words') || [];
        let value = e.target.value;
        let valueObj = value ? {[value.word]: value.explain}:{};
        for (let i = 0; i < array.length; i++) {
          if(array[i][value.word]){
            PubliceService.openConfirm({title: '单词有重复', content: '您输入的单词已存在列表中,是否替换?'}, () => {
              array[i][value.word] = value.explain;
              PubliceService.setStoreage('words', PubliceService.transformArrayData(array,false,true));
              this.inputValue = '';
              this.textareaValue = '';
            });
            return;
          }
        }
        array.push(valueObj);
        this.inputValue = '';
        this.textareaValue = '';
        wx.showToast({
          title:'新增成功',
          icon:'success',
          duation:1500
        });
        PubliceService.setStoreage('words', PubliceService.transformArrayData(array,false,true));
        bus.$emit('addHandle');
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
