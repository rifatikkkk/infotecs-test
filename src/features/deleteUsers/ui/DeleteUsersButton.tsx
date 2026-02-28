import React from "react";
import { Button } from "@/shared/ui";
import { useDeleteUserMutation } from "../model/hooks/useDeleteUsers";

interface DeleteUsersProps {
  idUser: string | undefined;
  onCancel?: () => void;
}

export const DeleteUsersButton: React.FC<DeleteUsersProps> = ({
  idUser,
  onCancel,
}) => {
  const deleteUserMutation = useDeleteUserMutation();
  const handleDelete = async () => {
    idUser &&
      deleteUserMutation.mutate(
        { id: idUser },
        {
          onSuccess: () => {
            onCancel?.();
          },
        },
      );
  };

  return <Button onClick={handleDelete}>Удалить</Button>;
};
