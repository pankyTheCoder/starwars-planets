<template>
  <div class="mt-2">
    <PlanetsHeader headerText="Planets" headerIcon="mdi-earth" />
    <PlanetsTable />
  </div>
</template>

<script lang="ts">
import PlanetsHeader from "@/components/PlanetsHeader.vue";
import PlanetsTable from "@/components/PlanetsTable.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {
    PlanetsTable,
    PlanetsHeader,
  },
});
</script>
