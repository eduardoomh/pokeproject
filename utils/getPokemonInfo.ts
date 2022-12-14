import { pokeAPI } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async (param: string) => {
    try {
        const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${param}`)

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null
    }
}