import { useAppDispatch } from "hooks";
import { handleSearchByName } from "store/modules/characters/actions";
import "./styles.css";

export const CharactersFilters = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>

      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={(e) => handleSearchByName(e.target.value, dispatch)}
      />
    </div>
  );
};
