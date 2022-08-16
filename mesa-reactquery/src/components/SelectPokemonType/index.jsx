import { useFetch } from "../../hooks/useFetch";

export const SelectPokemonType = () => {
  const { data, isLoading } = useFetch("type", "/type");

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!data) {
    return <p>erro ao listar tipos de pokemons</p>;
  }

  return (
    <div className="input-receptor">
      <label htmlFor="pokemonType">Tipo</label>

      <select name="pokemonType" id="">
        {data.results.map((type) => {
          return (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
