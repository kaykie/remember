<template>
  <div>
    <div class="weui-form-preview xnw-preview" v-for="item2 in items" :key="item2.key">
      <div v-for="(item3,k) in item2" :key="k" v-if="(k !== 'key' && k!== 'isShow')">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__label">{{k}}</div>
          <div class="weui-form-preview__value_in-hd" @click="openExplain(item2)">展开释义</div>
        </div>
        <div class="weui-form-preview__bd" v-if="item2.isShow">
          {{item3}}
        </div>
      </div>
      <div class="weui-form-preview__ft" v-if="item2.isShow">
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
  export default {
    data() {
      return {
        openKey: []
      }
    },
    props: {
      items:{
        type:Array
      }
    },

    methods: {
      handle(value) {
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
      openExplain(item) {
        // console.log(item);
        // console.log(this.openKey.includes(item.key));
        this.$emit('open',item.key);
        // this.openKey.push(item.key)
      }
    }

  }
</script>

<style lang="less">
  .xnw-preview {
    margin-bottom: 15rpx;
    .weui-form-preview__value_in-hd {
      font-size: 30rpx;
    }
    .weui-form-preview__hd {
      line-height: 2em;
      padding: 0 30rpx;

    }
    .weui-form-preview__ft {
      line-height: 60rpx;
      font-size: 0.8em;
    }
    .weui-form-preview__bd {
      font-size: 0.7em;
      padding: 0 30rpx;
      text-align: left;
    }
  }
</style>
