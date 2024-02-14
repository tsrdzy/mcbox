import { createStore } from "vuex";

export default createStore({
  state: {
    skin: "black",
  },
  getters: {},
  mutations: {
    skin(state, skin) {
      state.skin = skin;
    },
  },
  actions: {},
  modules: {},
});
