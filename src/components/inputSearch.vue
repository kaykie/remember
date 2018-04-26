<template>
  <div style="width: 100%">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <input class="weui-input" :name="inputName" :focus="true" type="text" @input="inputTyping"
                 v-model="inputValue" placeholder="请输入需要查找的单词">
          <div class="weui-icon-clear" v-if="inputValue&&inputValue.length > 0" @click="clearInput">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-cells weui-cells_after-title" v-if="isShowDownWordList">
      <div class="weui-cell">
        <div @click="selectWord(22)" class="weui-cell__bd">标题文字</div>
      </div>
      <div class="weui-cell">
        <div @click="selectWord(22)" class="weui-cell__bd">标题文字</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        // inputShowed: false
        isShowDownWordList:false
      }
    },
    props:{
      inputValue:{
        default:''
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
        this.isShowDownWordList = true
        // console.log(this.inputVal)
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
  }

</style>
