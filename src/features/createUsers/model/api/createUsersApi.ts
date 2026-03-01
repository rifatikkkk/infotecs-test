import { Users } from "@/entities/users/model";
import { api } from "@/shared/api";
import { UsersData } from "../types";

export const createUsersApi = async (data: UsersData) => {
  return await api.post<Users>("/users", data).then((res) => res.data);
};
