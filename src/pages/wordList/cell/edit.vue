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
  import inputSearch from '../../../components/inputSearch.vue'
  import xnwInput from '../../../components/input.vue'
  
  
  export default{
    data(){
      return {
        inputValue:'',
        textareaValue:''
      }
    },
    components:{
      inputSearch,
      xnwInput
    },
    methods(){
    
    },
    props:[],
    mounted(){
      console.log(this.$root.$mp.query);
      
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
    padding: 12rpx 15rpx 12rpx 35rpx;
  }
</style>
