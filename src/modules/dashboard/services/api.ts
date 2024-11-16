import axiosInstance from "../../../core/services/axios.ts";
import { useQuery } from "@tanstack/vue-query";
import { getArticlesUrl, getUserUrl } from "./path.ts";

export const getUserApi = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get(getUserUrl());
      return response.data;
    },
  });

export const getArticlesApi = () =>
  useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axiosInstance.get(getArticlesUrl());
      return response.data;
    },
  });
