import { useMutation } from "@tanstack/vue-query";
import axiosInstance from "../../../core/services/axios";
import { getLoginUserUrl, getRegisterUserUrl } from "./path";
import { AuthForm, RegisterForm } from "../models/forms.model";

export const useLoginApi = () =>
  useMutation({
    mutationFn: (body: { user: AuthForm }) =>
      axiosInstance.post(getLoginUserUrl(), body),
  });

export const useRegisterApi = () =>
  useMutation({
    mutationFn: (body: { user: RegisterForm }) =>
      axiosInstance.post(getRegisterUserUrl(), body),
  });
