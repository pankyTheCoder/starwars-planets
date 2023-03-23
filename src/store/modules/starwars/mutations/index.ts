import { MutationTree } from "vuex";
import {
  SET_PLANETS,
  SET_IS_PLANETS_LOADING,
  SET_TOTAL_PLANETS,
} from "./mutation-types";
import { starWarsState } from "../iStarWarsState";

export const mutations: MutationTree<starWarsState> = {
  [SET_PLANETS](state, payload) {
    state.planets = payload;
  },
  [SET_IS_PLANETS_LOADING](state, flag: boolean) {
    state.isPlanetsLoading = flag;
  },
  [SET_TOTAL_PLANETS](state, payload: number) {
    state.totalPlanets = payload;
  },
};
