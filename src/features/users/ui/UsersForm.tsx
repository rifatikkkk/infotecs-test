import React, { useState } from "react";
import { Space } from "antd";
import styled from "styled-components";
import { useUsersQuery } from "../model/hooks/useUsersQuery";
import { CreateUsers } from "@/features/createUsers";
import { Button, ListUsers } from "@/shared/ui";
import { UpdateUsers } from "@/features/updateUsers";
import { Users } from "@/entities/users/model";

const StyledFormUsers = styled(Space)`
  && {
    width: 100%;
  }
`;

export const UsersForm: React.FC = () => {
  const [openCreate, setOpenCreate] = useState(false);

  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);

  const { data: users } = useUsersQuery();

  const showModalCreate = () => {
    setOpenCreate(true);
  };

  const handleCancelCreate = () => {
    setOpenCreate(false);
  };
  const showModalUpdate = (user: Users) => {
    setSelectedUser(user);
    setOpenUpdate(true);
  };

  const handleCancelUpdate = () => {
    setSelectedUser(null);
    setOpenUpdate(false);
  };

  return (
    <StyledFormUsers direction="vertical" size="large">
      <ListUsers data={users} onItemClick={showModalUpdate} />
      <Button onClick={showModalCreate}>Создать пользователя</Button>
      <CreateUsers isOpen={openCreate} handleCancel={handleCancelCreate} />
      <UpdateUsers
        user={selectedUser}
        isOpen={openUpdate}
        handleCancel={handleCancelUpdate}
      />
    </StyledFormUsers>
  );
};
