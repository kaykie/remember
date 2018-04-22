<template>
  <div class="xnw-inputBcg">
    <textarea :name="inputName" placeholder="释义" @input="inputChange" v-bind="value" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
  export default{
    props:['value','placeholder','inputName'],
    methods:{
      inputChange(e){
      }
    }
    
  }
</script>


<style lang="less">
  .xnw-inputBcg{
    position:relative;
    padding:16rpx 20rpx;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    box-sizing:border-box;
    background-color:#efeff4;
    border-top:1rpx solid #d7d6dc;
    border-bottom:1rpx solid #d7d6dc;
    textarea{
      background: #ffffff;
    }
  
  }
</style>
