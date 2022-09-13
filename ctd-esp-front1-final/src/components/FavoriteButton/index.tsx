import "./styles.css";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns {JSX.Element}
 */

type FavoriteButtonProps = {
  isFavorite: boolean;
};

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorite } = props;

  const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};
