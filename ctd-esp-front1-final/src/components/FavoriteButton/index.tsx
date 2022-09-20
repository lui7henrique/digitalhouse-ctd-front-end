import "./styles.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";

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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorite, ...buttonProps } = props;

  return (
    <button className="botao-favorito" {...buttonProps}>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};
