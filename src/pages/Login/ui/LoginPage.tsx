import { LoginForm } from "@/features/login";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function LoginPage() {
  return (
    <StyledLayout>
      <StyledContent>
        <LoginForm />
      </StyledContent>
    </StyledLayout>
  );
}
