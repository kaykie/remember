<template>
  <div style="width: 100%">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <input class="weui-input" :name="inputName" type="text" @blur="inputTyping"
                 v-model="inputValue" v-bind="inputValue" placeholder="请输入单词">
          <div class="weui-icon-clear" v-if="inputValue&&inputValue.length > 0" @click="clearInput">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import request from '../utils/miniRequest'
  import PubliceService from '../service/PublicService'
  import Bus from './bus.vue'
  export default {
    data() {
      return {
        // inputShowed: false
        isShowDownWordList:false,
        wordDownList:[]
      }
    },
    props:{
      inputValue:{
        default:'aaa'
      },
      inputName:{
        default:'www'
      }
    },
    created() {
      console.log(this);
    },
    methods: {
      hideInput() {
        this.$emit('inputHandle', this.inputValue)
      },
      selectWord(value) {
        this.$emit('inputHandle', value)
      },
      clearInput() {
        this.inputValue = ''
      },
      showInput() {
        // this.inputShowed = true
      },
      inputTyping() {
        this.isShowDownWordList = true;
        console.log(this.inputValue);
        request(this.inputValue)
          .then(res => {
            console.log(res);
            Bus.$emit('blurHandle',res.data.trans_result[0])
          })
      }
    }
  }
</script>


<style lang="less">
  .xnw-downList {
    position: relative;
    top:0;
    left: 0;
    background: rgba(255, 255, 255, 0);
    .weui-icon-clear{
      top:30rpx
    }
  }

</style>
