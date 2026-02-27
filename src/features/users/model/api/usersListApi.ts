import { Users } from "@/entities/users/model";
import { api } from "@/shared/api";

export const usersListApi = () => {
  return api.get<Users[]>("/users").then((res) => res.data);
};
