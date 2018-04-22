<template>
  <div style="width: 100%">
    <div class="weui-search-bar">
      <div class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
          <input type="text" :name="inputName" class="weui-search-bar__input" placeholder="请输入需要查找的单词" v-model="inputVal"
                 :focus="inputShowed" @input="inputTyping"/>
          <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
        <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
          <icon class="weui-icon-search" type="search" size="14"></icon>
          <div class="weui-search-bar__text">请输入需要查找的单词</div>
        </label>
      </div>
      <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">确定</div>
    </div>
    <div class="weui-cells searchbar-result" v-if="inputVal.length > 0">
      <div class="weui-cell__bd weui-cell">
        <div @click="selectWord(22)">实时搜索文本</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
      return {
        inputVal: '',
        inputShowed: false
      }
    },
    props: ['inputName'],
    created(){
    },
    methods: {
      hideInput(){
        this.$emit('inputHandle', this.inputVal)
      },
      selectWord(value){
        
        this.$emit('inputHandle',value)
      },
      clearInput(){
        this.inputVal = ''
      },
      showInput(){
        this.inputShowed = true
      },
      inputTyping(){
      
      }
    }
  }
</script>


<style>
  .weui-search-bar {
    height: 135rpx;
    line-height: 110rpx;
  }
  .weui-search-bar__box,.weui-search-bar__input{
    height: 100%;
  }
  .weui-search-bar__box,.weui-search-bar__text,.weui-search-bar__cancel-btn{
    line-height: 110rpx;
  }
  
</style>
