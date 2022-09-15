import { useEffect, useState } from "react"
import { Container, Grid, Text, Image, Card } from "@nextui-org/react"
import { Layout } from "../../components/layouts"
import { FavoritePokemons, NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils"

const Favorites = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, [])

    return (
        <Layout title="Favoritos">
            {
                favoritePokemons.length === 0 ? (
                    <NoFavorites />
                ) : (
                    <FavoritePokemons pokemons={favoritePokemons} />
                )
            }

        </Layout>
    )
}

export default Favorites