import { EpisodeCard } from "components/EpisodeCard";
import { FavoriteButton } from "components/FavoriteButton";
import "./styles.css";

/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <Detail /> ```
 *
 * @returns {JSX.Element}
 */

export const Detail = () => {
  return (
    <div className="container">
      <h3>Rick Sanchez</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div className={"detalhe-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>

          <FavoriteButton isFavorite={false} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>

      <div className={"episodios-grade"}>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </div>
    </div>
  );
};
