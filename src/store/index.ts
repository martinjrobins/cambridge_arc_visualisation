import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 11.1,
  },
  mutations: {
    setNum(state, num) {
      state.num = num;
    },
  },
  actions: {},
  modules: {},
});
