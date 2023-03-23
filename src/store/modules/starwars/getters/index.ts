import { GetterTree } from "vuex";
import {
  GET_PLANETS,
  IS_PLANETS_LOADING,
  GET_TOTAL_PLANETS,
} from "./getter-types";
import { starWarsState } from "../iStarWarsState";

export const getters: GetterTree<starWarsState, Record<string, never>> = {
  [GET_PLANETS](state) {
    return state.planets;
  },
  [IS_PLANETS_LOADING](state) {
    return state.isPlanetsLoading;
  },
  [GET_TOTAL_PLANETS](state) {
    return state.totalPlanets;
  },
};
