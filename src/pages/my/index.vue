/**
* Created by apple on 2018/4/21.
*/
<template>
  <div class="page">
    <myList :items = 'items2'></myList>
  </div>
</template>


<script>
  import myList from '../../components/myList.vue'
  export default {
    data() {
      return {
        text:'ffff',
        items2: [
          {
            icon: '',
            url: '',
            title: '单词',
            text: ''
          },
          {
            icon: '',
            url: '',
            title: '个人信息',
            text: ''
          }
        ]
      }
    },
    components: {
      myList
    },
    // 计算
    computed() {

    },
    methods: {
      handle() {

      }
    }
  }
</script>


<style>

</style>
