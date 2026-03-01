import { LogoutButton } from "@/features/logout";
import { UsersForm } from "@/features/users";
import { Layout } from "antd";
import React from "react";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  && {
    display: flex;
    flex-direction: row;
    padding: 50px;
    background-color: white;
    gap: 100px;
  }
`;

export default function UsersPage() {
  return (
    <StyledLayout>
      <UsersForm />
      <LogoutButton />
    </StyledLayout>
  );
}
