import { useAuthQuery } from "@/shared/hooks";
import { Button, Input, Title } from "@/shared/ui";
import { Form, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  const { loginMutate, isLoggingIn, loginError, user } = useAuthQuery();

  useEffect(() => {
    user && navigate("/users");
  }, [user, navigate]);

  useEffect(() => {
    loginError && console.log(loginError);
  }, [loginError]);

  const handleSubmit = () => {
    if (login && password) {
      loginMutate({ login, password });
    }
  };

  return (
    <>
      <StyledLoginWrapper>
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
            Войти
          </Button>
        </StyledFormInput>
      </StyledLoginWrapper>
    </>
  );
};
