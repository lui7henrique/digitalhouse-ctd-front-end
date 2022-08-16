import { QueryFunction, useMutation, useQuery } from "react-query";
import { api } from "../services/api";

export const useFetch = <T = any>(key: string[], endpoint: string) => {
  const { isLoading, error, data } = useQuery<T>(key, async <T>() => {
    const { data } = await api.get<T>(endpoint);
    return data;
  });

  return { isLoading, error, data };
};
