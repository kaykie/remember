<template>
  <div class="page">
    <myPanel :items="wordList" @delete = 'deleteHandle' @edit = 'editHandle' @hide='hideHandle'></myPanel>
  </div>
</template>


<script>
  import myPanel from '../../components/myPanel.vue';
  import PubliceService from '../../service/PublicService'
  export default{
    data(){
      return {
        wordList:[]
      }
    },
    components:{
      myPanel
    },
    methods:{
      initPage(){
        this.wordList = PubliceService.getStoreage('words');
      },
      deleteHandle(){
        console.log(2234)
      },
      editHandle(){
    console.log(2234)
      },
      hideHandle(){
    console.log(2234)
      }
    },
    created(){
      this.initPage()
    }
  }
  
</script>

<style lang="less">


</style>
