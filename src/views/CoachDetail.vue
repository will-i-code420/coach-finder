<template>
  <section>
    <article>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ coach.hourlyRate }} / hour</h3>
      </base-card>
    </article>
    <article>
      <base-card>
        <header>
          <h2>Interested? Contact me now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-link></router-link>
      </base-card>
    </article>
    <article>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ coach.description }}</p>
      </base-card>
    </article>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CoachDetail",
  props: ["id"],
  data() {
    return {
      coach: null,
    };
  },
  created() {
    this.coach = this.$store.getters["coaches/getAllCoaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    areas() {
      return this.coach.areas;
    },
  },
};
</script>

<style scoped></style>;
