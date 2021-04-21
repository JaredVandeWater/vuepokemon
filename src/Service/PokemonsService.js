import { pokemonApi } from "./AxiosService"
import { AppState } from '../AppState'
import Pokemon from '../models/pokemon'


class PokemonsService {

    async getPokemons(query) {
        const res = await pokemonApi.get(query)

        AppState.activePokemon = new Pokemon(res.data)
        console.log(AppState.activePokemon);
    }

}

export const pokemonsService = new PokemonsService()