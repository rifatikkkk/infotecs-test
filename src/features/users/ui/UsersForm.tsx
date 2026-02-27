import { Button, ListUsers } from "@/shared/ui";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";
import { useUsersQuery } from "../model/hooks/useUsersQuery";

const StyledFormUsers = styled(Space)`
  && {
    width: 100%;
  }
`;

export const UsersForm: React.FC = () => {
  const { data: users } = useUsersQuery();

  return (
    <StyledFormUsers direction="vertical" size="large">
      <ListUsers data={users} />
      <Button>Создать пользователя</Button>
    </StyledFormUsers>
  );
};
