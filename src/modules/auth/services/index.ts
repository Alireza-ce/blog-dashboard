import { useMutation } from "@tanstack/vue-query";
import axiosInstance from "../../../core/services/axios";
import { getLoginUserUrl, getRegisterUserUrl } from "./path";
import { AuthForm, RegisterForm } from "../models/forms.model";

export const useLogin = () =>
  useMutation({
    mutationFn: (body: { user: AuthForm }) =>
      axiosInstance.post(getLoginUserUrl(), body),
  });

export const useRegister = () =>
  useMutation({
    mutationFn: (body: { user: RegisterForm }) =>
      axiosInstance.post(getRegisterUserUrl(), body),
  });
