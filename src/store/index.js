import Vue from "vue";
import Vuex from "vuex";
import VuexPersistedstate from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  plugins: [new VuexPersistedstate()],
});
