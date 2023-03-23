import { ActionTree } from "vuex";
import StarWarsService from "@/services/StarWarsService";
import { starWarsState } from "../iStarWarsState";
import { FETCH_PLANETS } from "./action-types";
import {
  SET_IS_PLANETS_LOADING,
  SET_TOTAL_PLANETS,
  SET_PLANETS,
} from "../mutations/mutation-types";

export const actions: ActionTree<starWarsState, Record<string, never>> = {
  async [FETCH_PLANETS]({ commit }, pagination: any) {
    commit(SET_IS_PLANETS_LOADING, true);
    commit(SET_PLANETS, []);
    const { sortBy, sortDesc, itemsPerPage, page } = pagination;
    const planetResults = await StarWarsService.discoverPlanets(page);
    let { results: planets } = planetResults?.data;
    const { count: totalPlanets } = planetResults?.data;
    if (sortBy.length === 1 && sortDesc.length === 1) {
      planets = planets.sort((a: any, b: any) => {
        const sortA = a[sortBy[0]];
        const sortB = b[sortBy[0]];

        if (sortDesc[0]) {
          if (sortA < sortB) return 1;
          if (sortA > sortB) return -1;
          return 0;
        } else {
          if (sortA < sortB) return -1;
          if (sortA > sortB) return 1;
          return 0;
        }
      });
    }
    if (itemsPerPage > 0) {
      planets = planets.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
    commit(SET_PLANETS, planets);
    commit(SET_TOTAL_PLANETS, totalPlanets);
    commit(SET_IS_PLANETS_LOADING, false);
  },
};
