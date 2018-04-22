/**
 * Created by apple on 2018/4/21.
 */
import Vue from 'vue';
import Route from 'vue-router';

import My from '../pages/my/index.vue';


Vue.use(Route);

export default new Route({
  routes:[
    {
      path:'/my',
      component:My
    }

  ]
})

