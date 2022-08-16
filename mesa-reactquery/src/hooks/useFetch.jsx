import { useQuery } from "react-query";
import { pokeapi } from "../services/pokeapi";

export const useFetch = (key, endpoint) => {
  const { isLoading, error, data } = useQuery([key], async () => {
    const { data } = await pokeapi.get(endpoint);

    return data;
  });

  return { isLoading, error, data };
};
