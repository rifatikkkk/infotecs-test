import React, { useState } from "react";
import { Space } from "antd";
import styled from "styled-components";
import { useUsersQuery } from "../model/hooks/useUsersQuery";
import { CreateUsers } from "@/features/createUsers";
import { Button, ListUsers } from "@/shared/ui";
import { UpdateUsers } from "@/features/updateUsers";

const StyledFormUsers = styled(Space)`
  && {
    width: 100%;
  }
`;

export const UsersForm: React.FC = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const { data: users } = useUsersQuery();

  const showModalCreate = () => {
    setOpenCreate(true);
  };

  const handleCancelCreate = () => {
    setOpenCreate(false);
  };
  const showModalUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCancelUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <StyledFormUsers direction="vertical" size="large">
      <ListUsers data={users} onItemClick={showModalUpdate} />
      <Button onClick={showModalCreate}>Создать пользователя</Button>
      <CreateUsers isOpen={openCreate} handleCancel={handleCancelCreate} />
      <UpdateUsers isOpen={openUpdate} handleCancel={handleCancelUpdate} />
    </StyledFormUsers>
  );
};
