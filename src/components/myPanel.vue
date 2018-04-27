<template>
  <div>
    <div class="weui-form-preview xnw-preview" v-for="item2 in items" :key="item2.key">
      <div v-for="(item3,k) in item2" :key="k" v-if="(k !== 'key' && k!== 'isShow')">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__label">{{k}}</div>
          <div class="weui-form-preview__value_in-hd" @click="openExplain(item2)">{{item2.isShow?'收起释义' : '展开释义'}}</div>
        </div>
        <div class="weui-form-preview__bd" v-if="item2.isShow">
          释义: {{item3}}
        </div>
      </div>
      <div class="weui-form-preview__ft" v-if="item2.isShow">
        <div @click="handle('删除',item2.key)" class="weui-form-preview__btn weui-form-preview__btn_primary"
             >删除
        </div>
        <div @click="handle('编辑',item2.key)" class="weui-form-preview__btn weui-form-preview__btn_primary"
        >编辑
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import input from '../components/input.vue'

  export default {
    data() {
      return {
        openKey: []
      }
    },
    components: {
      input
    },
    props: {
      items: {
        type: Array
      }
    },

    methods: {
      handle(type, value) {
        switch (type) {
          case '删除':
            this.$emit('delete', value);
            break;
          case '编辑':
            this.$emit('edit', value);
            break;
        }
      },
      openExplain(item) {
        this.$emit('hide', item.key);
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
    .weui-form-preview__ft:after{
      display: none;
    }
    .weui-form-preview__hd:after{
      display: none;
    }
    .weui-form-preview:before{
      display: none;
    }
    .weui-form-preview__bd {
      font-size: 0.7em;
      padding: 0 30rpx;
      text-align: left;
    }
  }
</style>
