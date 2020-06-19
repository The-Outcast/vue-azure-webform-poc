<template>
  <div class="hello">
    <div class="container-sm">
      <h1>{{ msg }}</h1>
      <form ref="form" @submit.prevent="submitForm">
        <div class="row">
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Insz</label>
            <input type="text" class="form-control" v-model="railRequest.Insz" />
          </div>
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Email addres</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="railRequest.Email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Voornaam</label>
            <input type="text" class="form-control" v-model="railRequest.Firstname" />
          </div>
          <div class="form-group col-sm-12 col-md-6 col-lg-4">
            <label for="exampleInputEmail1">Naam</label>
            <input type="text" class="form-control" v-model="railRequest.Lastname" />
          </div>
        </div>
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from "vue-property-decorator";
import {
  RailpassRequest,
  postRailpassRequest
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

  submitForm() {
    console.log("submitting form", this.railRequest);
    postRailpassRequest(this.railRequest);
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

@include media-breakpoint-up(sm) {
  .test {
    display: flex;
  }
}
</style>
