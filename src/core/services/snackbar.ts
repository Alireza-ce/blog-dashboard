import { useSnackbar } from "vue3-snackbar";

export const useNotication = () => {
  const snackbar = useSnackbar();

  const notication = (message: string, type: "success" | "error") =>
    snackbar.add({
      type: type,
      text: message,
    });

  const onErrorNotification = (message: string) => {
    notication(message, "error");
  };

  const onSuccessNotification = (message: string) => {
    notication(message, "success");
  };

  return {
    onErrorNotification,
    onSuccessNotification,
  };
};
