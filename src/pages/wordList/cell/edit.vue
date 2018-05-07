<template>
  <div class="page">
    <form action="" @submit="submit">
      <inputSearch :inputName="word" :input-value="inputValue"  @inputHandle='inputValueHandle'></inputSearch>

      <xnwInput :input-value="textareaValue" :inputName="explain"></xnwInput>
      <button type="primary" form-type="submit">保存</button>
    </form>

  </div>
</template>

<script>
  import inputSearch from '../../../components/inputSearch.vue'
  import xnwInput from '../../../components/input.vue'
  import PubliceService from '../../../service/PublicService'
  import bus from '../../../components/bus.vue'
  export default{
    data(){
      return {
        inputValue:'',
        textareaValue:'',
        word:'word',
        explain:'explain'
      }
    },
    components:{
      inputSearch,
      xnwInput
    },
    methods:{
      submit(e){
        console.log(e);
        // wx.removeStorage('words');
        let array = PubliceService.getStoreage('words') || [];
        let value = e.target.value;
        console.log(array,value);
        for(let i = 0;i<array.length;i++){
          for(let key in array[i]){
            if(key === value.word && key !== 'key'){
              array[i][value.word] = value.explain;
              console.log(array);
              wx.showToast({
                title:'更新成功',
                icon:'success',
                duation:1500
              });
              PubliceService.setStoreage('words',array);
              PubliceService.debounceLog(500,()=>{wx.navigateBack({delta:1})});
              bus.$emit('editHandle');
              return
            }
          }
        }
        let obj = {[value.word]:value.explain,key:array.length};
        array.push(obj);
        wx.showToast({
          title:'新增成功',
          icon:'success',
          duation:1500
        });
        PubliceService.debounceLog(500,()=>{wx.navigateBack({delta:1})});
        PubliceService.setStoreage('words',array);
        bus.$emit('editHandle');
        console.log(array)

      }
    },
    props:[],
    mounted(){
      let key = this.$root.$mp.query.key * 1;
      const wordList = PubliceService.getStoreage('words');
      wordList.forEach(item => {
        delete item.isShow;
      });
      let uniqueObj = wordList.filter(item => item.key === key)[0];
      for(let k in uniqueObj){
        if(k !== 'key'){
          this.inputValue = k;
          this.textareaValue = uniqueObj[k]
        }
      }
    }

  }
</script>

<style lang="less">
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
    padding: 12rpx 15rpx 12rpx 35rpx;
  }
</style>
