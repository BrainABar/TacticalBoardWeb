import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastPressed: '',
    pressCount: 0,
    draw: false,
  },
  mutations: {
    updatePressed(state, name) {
      if (state.lastPressed !== name) {
        state.pressCount = 0;
        state.lastPressed = name;
      }
      state.pressCount += 1;
    },

    toggleDraw(state) {
      state.draw = !state.draw;
    },
  },
  actions: {
  },
  modules: {
  },
});
