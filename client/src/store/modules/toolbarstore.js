const getters = {
  lastPressed: (state) => (state.lastPressed),
  pressCount: (state) => (state.pressCount),
};

const mutations = {
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
};

const actions = {
  updatePressed(context, name) {
    context.commit('updatePressed', name);
  },

  toggleDraw(context) {
    context.commit('toggleDraw');
  },
};

const state = () => ({
  lastPressed: '',
  pressCount: null,
  draw: false,
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
