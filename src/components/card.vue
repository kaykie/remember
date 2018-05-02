<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <p>共积累了{{wordTotal}}个单词</p>
    <p>您已到达<span style="color: #ff0000;">{{degree}}</span>水平,加油!</p>
  </div>
</template>

<script>
  import config from '../../config'
  import bus from './bus.vue'
  import PubliceService from '../service/PublicService'
  export default {
    data(){
      return {
        degree: '',
        wordTotal: 0
      }
    },
    props: ['text'],
    mounted(){
      bus.$on('addHandle',()=>{
        this.initPage()
      });
      this.initPage()
    },
    methods:{
      initPage(){
        let array = PubliceService.getStoreage('words');
        console.log(array);
        this.wordTotal = array.length;
        this.degree = PubliceService.returnDegree(this.wordTotal);
      }
    }
  }
</script>

<style>
  .card {
    padding: 10px;
  }
</style>
