
import { reactive } from 'vue'
import Pokemon from './models/pokemon'

export const AppState = reactive({
    /** @type {Pokemon} */
    activePokemon: null
})
