<template>
  <div class="weui-cells weui-cells_after-title">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <textarea v-model="inputValue" class="" :name="inputName" placeholder="释义" style="height: 3.3em"/>
        <div class="weui-textarea-counter">0/200</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from './bus.vue'
  export default {
    data(){
      return{
        inputVal:''
      }
    },
    props: ['inputValue', 'placeholder', 'inputName'],
    methods: {
      inputChange(e) {
      }
    },
    mounted(){
      console.log(Bus);
      Bus.$on('blurHandle',(v)=>{
        this.inputValue = v.dst
      })
    }

  }
</script>


<style lang="less">
  .xnw-inputBcg {
    position: relative;
    padding: 16rpx 20rpx;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    background-color: #efeff4;
    border-top: 1rpx solid #d7d6dc;
    border-bottom: 1rpx solid #d7d6dc;
    textarea {
      background: #ffffff;
    }

  }
</style>
