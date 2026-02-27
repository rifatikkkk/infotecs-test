import { Button, ListUsers } from "@/shared/ui";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";

const StyledFormUsers = styled(Space)`
  && {
    width: 100%;
  }
`;

export const UsersForm: React.FC = () => {
  return (
    <StyledFormUsers direction="vertical" size="large">
      <ListUsers />
      <Button>Создать пользователя</Button>
    </StyledFormUsers>
  );
};
