import Vue from "vue";
import Vuex from "vuex";
import StarWarsState from "@/store/modules/starwars";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    StarWarsState,
  },
});
