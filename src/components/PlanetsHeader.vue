<template>
  <v-row align="center" class="spacer mb-3" no-gutters>
    <v-col cols="4" sm="2" md="1">
      <div class="planets-header-wrapper mb-4">
        <v-avatar color="secondary" size="36">
          <v-icon color="yellow darken-2">{{ headerIcon }}</v-icon>
        </v-avatar>
        <h2 class="ml-3">{{ headerText }}</h2>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PlanetsHeader",
  props: {
    headerText: {
      type: String,
      required: true,
    },
    headerIcon: {
      type: String,
    },
  },
});
</script>
<style lang="scss">
.planets-header-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
