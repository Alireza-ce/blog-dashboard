import { LocalStorageKeys } from "../constants/auth";

export const isLoggedIn = () => localStorage.getItem(LocalStorageKeys.TOKEN);
