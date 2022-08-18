import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";

export const useFetch = <T = any>(
  key: Array<string | number>,
  endpoint: string,
  config?: AxiosRequestConfig
) => {
  const query = useQuery<T>(key, async <T>() => {
    const { data } = await api.get<T>(endpoint, config);
    return data;
  });

  return { ...query };
};
