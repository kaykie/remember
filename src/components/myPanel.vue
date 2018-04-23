<template>
  <div>
    <div class="weui-form-preview xnw-preview" v-for="item in items" :key="item.key">
        <div v-if="'a' !== 'key'">
          
          <div class="weui-form-preview__hd">
            <div class="weui-form-preview__label">a</div>
            <div class="weui-form-preview__value_in-hd" @click="openExplain(item)">展开释义</div>
          </div>
          <div class="weui-form-preview__bd" v-if="openKey.indexOf(item.key) > -1">
            vvv
          </div>
        </div>
      <div class="weui-form-preview__ft" v-if="openKey.indexOf(item.key) > -1">
        <div @click="handle('删除')" class="weui-form-preview__btn weui-form-preview__btn_primary"
             hover-class="weui-form-preview__btn_active">删除
        </div>
        <div @click="handle('编辑')" class="weui-form-preview__btn weui-form-preview__btn_primary"
             hover-class="weui-form-preview__btn_active">编辑
        </div>
        <div @click="handle('隐藏')" class="weui-form-preview__btn weui-form-preview__btn_primary"
             hover-class="weui-form-preview__btn_active">收起
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        openKey:[]
      }
    },
    props: ['items'],
    
    methods: {
      handle(value){
        switch (value) {
          case '删除':
            this.$emit('delete');
            break;
          case '编辑':
            this.$emit('edit');
            break;
          case  '隐藏':
            this.$emit('hide');
            break;
        }
      },
      openExplain(item){
        console.log(item)
        this.openKey.push(item.key)
      }
    }
    
  }
</script>

<style lang="less">
  .xnw-preview{
    margin-bottom: 15rpx;
    .weui-form-preview__value_in-hd{
      font-size: 30rpx;
    }
    .weui-form-preview__hd{
      line-height: 2em;
      padding:0 30rpx;
      
    }
    .weui-form-preview__ft{
      line-height: 60rpx;
      font-size: 0.8em;
    }
    .weui-form-preview__bd{
      font-size: 0.7em;
      padding:0 30rpx;
      text-align: left;
    }
  }
</style>
