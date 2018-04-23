<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <p>共积累了{{}}个单词</p>
    <p>您已到达</p>
  </div>
</template>

<script>
  import config from '../../config'
  import PubliceService from '../service/PublicService'
export default {
  props: ['text'],
  created(){
    console.log(wx);
    let array = PubliceService.getStoreage('words');
    let len = array.length;

    if(array.length ){

    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
