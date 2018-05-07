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
//  import MD5 from '../../utils/md5'
  export default {
    data() {
      return {
        text:'ffff',
        items2: [
          {
            icon: '',
            url: '../wordList/main',
            title: '单词列表',
            text: ''
          }
        ]
      }
    },
    components: {
      myList
    },
    created(){

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
