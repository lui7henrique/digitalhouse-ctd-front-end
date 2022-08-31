import { useMemo } from "react";

type PokemonCategory = "semente" | "lagarto" | "chama" | "treinador";

type Pokemon = {
  id: number;
  nome: string;
  kilos?: number;
  pokemon: boolean;
  categoria: PokemonCategory;
};

function App() {
  const pokemons = useMemo(
    (): Pokemon[] => [
      {
        id: 1,
        nome: "bulbasaur",
        kilos: 6.9,
        pokemon: true,
        categoria: "semente",
      },
      {
        id: 2,
        nome: "charmander",
        kilos: 8.5,
        pokemon: true,
        categoria: "lagarto",
      },
      {
        id: 3,
        nome: "charizard",
        kilos: 95.5,
        pokemon: true,
        categoria: "chama",
      },
      {
        id: 4,
        nome: "ash",
        pokemon: false,
        categoria: "treinador",
      },
    ],
    []
  );

  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <div>
            <h1>{pokemon.nome}</h1>
            {pokemon.kilos && <sup>weight: {pokemon.kilos}</sup>}
          </div>
        );
      })}
    </div>
  );
}

export default App;
