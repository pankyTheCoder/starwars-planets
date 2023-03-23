import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { starWarsState } from "./iStarWarsState";
import { iPlanets } from "@/interface/iPlanet";

const StarWarsState: Module<starWarsState, Record<string, never>> = {
  state: {
    planets: [] as Array<iPlanets>,
    isPlanetsLoading: false,
    totalPlanets: 0,
  },
  actions,
  getters,
  mutations,
};

export default StarWarsState;
