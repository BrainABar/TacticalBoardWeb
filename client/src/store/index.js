import Vue from 'vue';
import Vuex from 'vuex';
import toolbarstore from '@/store/modules/toolbarstore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toolbarstore,
  },
});
