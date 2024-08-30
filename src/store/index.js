import { createStore } from "vuex";
import chestcommands from './modules/chestcommands'
export default createStore({
  state: {
    theme: "dark",
  },
  getters: {},
  mutations: {
    themes(state, data) {
      state.theme = data
    }
  },
  modules: {
    chestcommands
  },
});
