import { AUTH_CONFIG } from "@/shared/config";

export const loginRequest = (
  login: string,
  password: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        login === AUTH_CONFIG.ADMIN_CREDENTIALS.login &&
        password === AUTH_CONFIG.ADMIN_CREDENTIALS.password
      ) {
        const token =
          "example-token-" + Math.random().toString(36).substring(2);
        resolve(token);
      } else {
        reject(new Error("Неверный логин или пароль"));
      }
    }, 2000);
  });
};
