import React, { useState } from "react";
import { Space } from "antd";
import styled from "styled-components";
import { useUsersQuery } from "../model/hooks/useUsersQuery";
import { CreateUsers } from "@/features/createUsers";
import { Button, ListUsers } from "@/shared/ui";

const StyledFormUsers = styled(Space)`
  && {
    width: 100%;
  }
`;

export const UsersForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { data: users } = useUsersQuery();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <StyledFormUsers direction="vertical" size="large">
      <ListUsers data={users} />
      <Button onClick={showModal}>Создать пользователя</Button>
      <CreateUsers isOpen={open} handleCancel={handleCancel} />
    </StyledFormUsers>
  );
};
