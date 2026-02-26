import { notification } from "antd";
import { useCallback } from "react";

type NotificationType = "success" | "error" | "info" | "warning" | "open";

notification.config({
  placement: "topRight",
  duration: 4,
  maxCount: 3,
});

export const useNotification = () => {
  const showNotification = useCallback(
    (
      type: NotificationType,
      message: string,
      description: string,
      duration: number = 4,
    ) => {
      notification[type]({
        message,
        description,
        duration,
      });
    },
    [],
  );

  return {
    showNotification,
    contextHolder: null,
  };
};
