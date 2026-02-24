import { Button, Input, Title } from "@/shared/ui";
import { Form, Layout } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const StyledLoginWrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFormInput = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LoginForm: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLoginWrapper>
      <Title content="Авторизация" />
      <StyledFormInput>
        <Input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={setLogin}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={setPassword}
        />
        <Button>Войти</Button>
      </StyledFormInput>
    </StyledLoginWrapper>
  );
};
