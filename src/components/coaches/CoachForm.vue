<template>
  <form @submit.prevent="registerCoach">
    <p class="form-control">
      <label for="firstName">First Name:</label>
      <input id="firstName" type="text" v-model.trim="firstName" />
    </p>
    <p class="form-control">
      <label for="lastName">Last Name:</label>
      <input id="lastName" type="text" v-model.trim="lastName" />
    </p>
    <p class="form-control">
      <label for="rate">Hourly Rate:</label>
      <input id="rate" type="number" v-model.number="rate" />
    </p>
    <h3>Areas Of Expertise</h3>
    <p class="form-control">
      <label for="frontend">Frontend</label>
      <input
        id="frontend"
        type="checkbox"
        value="frontend"
        v-model="checkedAreas"
      />
      <label for="backend">Backend</label>
      <input
        id="backend"
        type="checkbox"
        value="backend"
        v-model="checkedAreas"
      />
      <label for="career">Career</label>
      <input
        id="career"
        type="checkbox"
        value="career"
        v-model="checkedAreas"
      />
    </p>
    <p class="form-control">
      <label for="description">Describe Yourself</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model.trim="description"
      ></textarea>
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ["register-coach"],
  data() {
    return {
      firstName: null,
      lastName: null,
      rate: null,
      checkedAreas: [],
      description: null,
    };
  },
  methods: {
    registerCoach() {
      const id = new Date.toISOString();
      const newCoach = {
        id,
        firstName: this.firstName,
        lastName: this.lastName,
        hourlyRate: this.rate,
        areas: this.checkedAreas,
        description: this.description,
      };
      this.$emit("register-coach", newCoach);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>