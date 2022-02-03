<template>
  <section>Search/Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register As Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item 
      v-for="coach in filteredCoaches" 
      :key="coach.id"
      :id="coach.id"
      :firstName="coach.firstName"
      :lastName="coach.lastName"
      :rate="coach.rate"
      :areas="coach.areas"
      >
      <coach-item>
    </ul>
    <h2 v-else>No Coaches Found</h2>
  </section>
</template>

<script>
// @ is an alias to /src
import CoachItem from "../components/coaches/CoachItem.vue";

export default {
  name: "CoachesList",
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/getAllCoaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
