<template>
  <div class="page">
    <myPanel :items="wordList" @open="openHandle" @delete='deleteHandle' @edit='editHandle'
             @hide='hideHandle'></myPanel>
  </div>
</template>


<script>
  import myPanel from '../../components/myPanel.vue';
  import PubliceService from '../../service/PublicService';
  import bus from '../../components/bus.vue'

  export default {
    data() {
      return {
        wordList: []
      }
    },
    components: {
      myPanel
    },
    methods: {
      initPage() {
        this.wordList = PubliceService.getStoreage('words') || [];
        this.wordList.length && this.wordList.forEach(item => item.isShow = false)
      },
      deleteHandle(value) {
        console.log(value);
        let newArray = this.wordList.filter(item => item.key !== value);
        this.wordList = newArray;
        wx.showToast({
          title: '已删除',
          icon: 'success',
          duration: 1500
        });
        newArray.forEach(item => {
          delete item.isShow
        });
        PubliceService.setStoreage('words', newArray)
      },
      editHandle(value) {
        const url = `./cell/main?key=${value}`;
        wx.navigateTo({url});

      },
      hideHandle(value) {
        let newArray = JSON.parse(JSON.stringify(this.wordList));
        newArray.find(item => item.key === value).isShow = !newArray.find(item => item.key === value).isShow;
        this.wordList = newArray
      },
      openHandle(key) {
        console.log(key);
        let newArray = JSON.parse(JSON.stringify(this.wordList));
        let word = newArray.find(item2 => item2.key === key);
        word.isShow = true;
        this.wordList = newArray;
      }
    },
    mounted() {
      bus.$on('editHandle', () => {
        this.initPage();
      });
      this.initPage()
    }
  }

</script>

<style lang="less">


</style>
