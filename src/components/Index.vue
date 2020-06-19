<template>
  <div class="hello">
    <div class="container-sm">
      <h1>{{ msg }}</h1>
      <form ref="form" @submit.prevent="submitForm">
        <div class="row">
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Insz</label>
            <input
              type="text"
              class="form-control"
              v-model="railRequest.Insz"
            />
          </div>
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Email addres</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="railRequest.Email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Voornaam</label>
            <input
              type="text"
              class="form-control"
              v-model="railRequest.Firstname"
            />
          </div>
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Naam</label>
            <input
              type="text"
              class="form-control"
              v-model="railRequest.Lastname"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
    </div>
    <div class="container requests">
      <div class="row seperate-bot">
        <h2 class="col-sm-12 col-md-5">Gemaakte aanvragen</h2>
        <button class="btn btn-outline-secondary" @click="retrieveRequests">
          aanvragen ophalen
        </button>
      </div>
      <p v-if="!completedRequests">Geen Railpass aanvragen</p>
      <table class="table" v-if="completedRequests">
        <thead>
          <tr>
            <td>Insz</td>
            <td>Email</td>
            <td>Voornaam</td>
            <td>Naam</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in completedRequests" :key="request.Insz">
            <td>{{ request.Insz }}</td>
            <td>{{ request.Email }}</td>
            <td>{{ request.Firstname }}</td>
            <td>{{ request.Lastname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  RailpassRequest,
  postRailpassRequest,
  getRailpassRequests
} from "../services/azure/azureservice";

@Component
export default class Index extends Vue {
  @Prop() private msg!: string;

  @Prop() private railRequest: RailpassRequest = {
    Insz: "",
    Email: "",
    Firstname: "",
    Lastname: ""
  };

  @Prop() private completedRequests: RailpassRequest[] | null = null;

  submitForm() {
    postRailpassRequest(this.railRequest);
  }

  async retrieveRequests() {
    const result = await getRailpassRequests();
    console.log("result", result);
    this.$props["completedRequests"] = result;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.seperate-bot {
  margin-bottom: 2rem;
}

.requests {
  border-top: solid darkgray 1px;
  margin-top: 2rem;
  padding-top: 1rem;
}
</style>
