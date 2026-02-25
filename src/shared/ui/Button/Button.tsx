import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

const StyledButton = styled(AntButton)`
  margin-left: auto;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 6px;
  color: white;
  background-color: #226292;
  border: 1px solid #3a5b73;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  htmlType = "button",
}) => {
  return (
    <StyledButton htmlType={htmlType} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
