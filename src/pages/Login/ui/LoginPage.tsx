import { LoginForm } from "@/features/login";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";

const StyledContent = styled(Content)`
  min-height: 100vh;
`;

const StyledLayout = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
`;

export default function LoginPage() {
  return (
    <StyledContent>
      <StyledLayout>
        <LoginForm />
      </StyledLayout>
    </StyledContent>
  );
}
