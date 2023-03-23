<template>
  <div class="planets-table-wrapper">
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="PLANET_TABLE_HEADERS"
          :items="items"
          :items-per-page="10"
          :loading="isPlanetsLoading"
          :options.sync="options"
          :server-items-length="totalPlanets"
          @update:options="onOptionsChange"
          class="elevation-3"
          loading-text="Loading Planets..."
          no-data-text="Planets not available!"
          must-sort
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PLANET_TABLE_HEADERS } from "@/utilities";
import {
  GET_PLANETS,
  GET_TOTAL_PLANETS,
  IS_PLANETS_LOADING,
} from "@/store/modules/starwars/getters/getter-types";
import { iPlanets } from "@/interface/iPlanet";
import { FETCH_PLANETS } from "@/store/modules/starwars/actions/action-types";

export default Vue.extend({
  name: "PlanetsTable",
  data: () => ({
    PLANET_TABLE_HEADERS,
    options: {},
    pagination: {},
  }),
  computed: {
    items(): Array<iPlanets> {
      return this.$store.getters[GET_PLANETS];
    },
    isPlanetsLoading(): boolean {
      return this.$store.getters[IS_PLANETS_LOADING];
    },
    totalPlanets(): number {
      return this.$store.getters[GET_TOTAL_PLANETS];
    },
  },
  methods: {
    onOptionsChange(pagination: any): void {
      this.pagination = pagination;
    },
  },
  watch: {
    options: {
      handler() {
        this.$store.dispatch(FETCH_PLANETS, this.pagination);
      },
      deep: true,
    },
  },
});
</script>
<style lang="scss">
.planets-table-wrapper {
  & tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
