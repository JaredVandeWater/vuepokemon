<template>
  <div class="Results" v-if="state.pokemon">
    <div class="row justify-content-center">
      <h2>It's {{ state.pokemon.name }}!</h2>
    </div>
    <div class="row justify-content-center">
      <img :src="state.pokemon.img" alt="" />
    </div>
  </div>
</template>


<script>
import { reactive } from "vue";
import { computed } from "vue";
import { AppState } from "../AppState";
import { pokemonsService } from "../Service/PokemonsService";
export default {
  name: "Results",
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.activePokemon),
    });
    return {
      state,
      setActive(pokemon) {
        pokemonsService.setActive(pokemon);
      },
    };
  },
  components: {},
};
</script>


<style lang="scss" scoped>
</style>