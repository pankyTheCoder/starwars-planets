import { iPlanets } from "@/interface/iPlanet";

export interface starWarsState {
  planets: Array<iPlanets>;
  isPlanetsLoading: boolean;
  totalPlanets: number;
}
