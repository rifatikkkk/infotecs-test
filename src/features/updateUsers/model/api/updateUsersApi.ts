import { Users, UsersData } from "@/entities/users/model";
import { api } from "@/shared/api";

export const updateUsersApi = async (id: string, data: UsersData) => {
  return await api.put<Users>(`/users/${id}`, data).then((res) => res.data);
};
