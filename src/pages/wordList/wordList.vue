<template>
  <div class="page">
    <myPanel :items="wordList" @open="openHandle" @delete = 'deleteHandle' @edit = 'editHandle' @hide='hideHandle'></myPanel>
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
        this.wordList.forEach(item => item.isShow = false)
      },
      deleteHandle(){
        console.log(2234)
      },
      editHandle(){
    console.log(2234)
      },
      hideHandle(){
    console.log(2234)
      },
      openHandle(key){
        console.log(key);
        let newArray = JSON.parse(JSON.stringify(this.wordList));
        let word = newArray.find(item2 => item2.key === key);
        word.isShow = true;
        this.wordList = newArray;
      }
    },
    mounted(){
      this.initPage()
    }
  }

</script>

<style lang="less">


</style>
