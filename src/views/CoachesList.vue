<template>
  <section>Search/Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register As Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h2 v-else>No Coaches Found</h2>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CoachesList",
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
</style>
