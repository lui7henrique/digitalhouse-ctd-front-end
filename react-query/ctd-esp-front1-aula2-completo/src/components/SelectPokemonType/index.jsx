export const SelectPokemonType = () => {
  const { data } = useFetch("/type");

  console.log(data);

  return (
    <div className="input-receptor">
      <label htmlFor="pokemonType">Tipo</label>

      <select name="pokemonType" id="">
        <option value="grass">Grama</option>
      </select>
    </div>
  );
};
