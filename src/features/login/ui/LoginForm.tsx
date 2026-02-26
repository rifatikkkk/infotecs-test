import React, { useEffect, useState } from "react";
import { Form, Space } from "antd";
import styled from "styled-components";
import { useNotification } from "@/shared/hooks";
import { Button, Input, Title } from "@/shared/ui";
import { useAuth } from "@/features/login";

const StyledWrapper = styled(Space)`
  && {
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: flex-start;
  }
`;

const StyledFormInput = styled(Form)`
  && {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`;

export const LoginForm: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { loginMutate, isLoggingIn, loginError } = useAuth();

  const { showNotification } = useNotification();

  useEffect(() => {
    if (loginError) showNotification("error", "Ошибка авторизации", loginError);
  }, [loginError]);

  const handleSubmit = () => {
    if (login && password) {
      loginMutate({ login, password });
    }
  };

  return (
    <>
      <StyledWrapper size={20}>
        <Title content="Авторизация" />
        <StyledFormInput onFinish={handleSubmit}>
          <Input
            id="login"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={setLogin}
            disabled={isLoggingIn}
          />
          <Input
            id="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={setPassword}
            disabled={isLoggingIn}
          />
          <Button htmlType="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Вход.." : "Войти"}
          </Button>
        </StyledFormInput>
      </StyledWrapper>
    </>
  );
};
