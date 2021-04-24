<template>
  <div class="HomePage mybg">
    <div class="container">
      <div class="row justify-content-center">
        <h1>
          <label
            for="Pokemon Number Form"
            class="text-center d-flex justify-content-center"
            >Who's that Pokemon?</label
          >
        </h1>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <form @submit.prevent="search">
            <div class="form-group">
              <input
                required
                type="number"
                class="form-control"
                placeholder="# between 1-898"
                min="1"
                max="898"
                v-model="state.query"
              />
            </div>
          </form>
        </div>
      </div>
      <Results />
    </div>
  </div>
</template>


<script>
import { reactive } from "vue";
import { pokemonsService } from "../Service/PokemonsService";
import Results from "../components/ResultsComponent";
export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      query: "",
    });
    return {
      state,
      async search() {
        try {
          await pokemonsService.getPokemons(state.query);
          state.query = "";
        } catch (error) {
          console.error(error);
        }
      },
    };
  },
  components: {
    Results,
  },
};
</script>


<style lang="scss" scoped>
.mybg{
  
}
</style>

