<template>
  <div class="weui-cells weui-cells_after-title">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <textarea class="" :name="inputName" placeholder="释义" style="height: 3.3em"/>
        <div class="weui-textarea-counter">0/200</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value', 'placeholder', 'inputName'],
    methods: {
      inputChange(e) {
      }
    }

  }
</script>


<style lang="less">
  .xnw-inputBcg {
    position: relative;
    padding: 16 rpx 20 rpx;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    background-color: #efeff4;
    border-top: 1 rpx solid #d7d6dc;
    border-bottom: 1 rpx solid #d7d6dc;
    textarea {
      background: #ffffff;
    }

  }
</style>
