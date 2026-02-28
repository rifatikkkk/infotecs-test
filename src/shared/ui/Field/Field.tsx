import { Space, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { Input } from "../Input/Input";

interface FieldProps {
  id: string;
  label: string;
  isDisabled?: boolean;
}

const StyledField = styled(Space)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .ant-space-item {
      width: 100%;
    }
  }
`;

const StyledLabel = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
`;

export const Field: React.FC<FieldProps> = ({
  id,
  label,
  isDisabled = false,
}) => {
  return (
    <StyledField size={0}>
      <StyledLabel>{label}</StyledLabel>
      <Input id={id} disabled={isDisabled} />
    </StyledField>
  );
};
