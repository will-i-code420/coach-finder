<template>
  <section>
    <base-card>
      <h2>Register As A Coach</h2>
      <coach-form @register-coach="registerCoach"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../components/coaches/CoachForm.vue";
export default {
  name: "CoachRegister",
  components: {
    CoachForm,
  },
  methods: {
    registerCoach(coachForm) {
      this.$store.dispatch("coaches/register", coachForm);
      this.$store.dispatch("setUserId", coachForm);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
</style>
