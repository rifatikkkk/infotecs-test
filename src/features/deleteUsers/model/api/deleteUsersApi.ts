import { Users } from "@/entities/users/model";
import { api } from "@/shared/api";

export const deleteUsersApi = async (id: string) => {
  return await api.delete<Users>(`/users/${id}`).then((res) => res.data);
};
