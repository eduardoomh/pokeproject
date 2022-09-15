import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeAPI } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonResultAPI, SmallPokemon } from '../interfaces'
interface HomeProps {
  pokemons: SmallPokemon[]
}

const Home: NextPage<HomeProps> = (props) => {
  const { pokemons } = props

  return (
    <>
      <Layout title="Pokemon App - Home">
        <Grid.Container gap={2} justify="flex-start" >
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />

            ))
          }
        </Grid.Container>
      </Layout>

    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("hola mundo")
  const { data } = await pokeAPI.get<PokemonResultAPI>("/pokemon?limit=151")

  const pokemons: SmallPokemon[] = data.results.map((item, index) => {
    return {
      ...item,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default Home