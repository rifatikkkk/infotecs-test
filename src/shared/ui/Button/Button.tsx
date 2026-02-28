import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  htmlType?: "button" | "submit" | "reset";
  type?: "primary" | "default" | "dashed" | "link" | "text" | "ghost";
}

const StyledButton = styled(AntButton)`
  && {
    margin-left: auto;
    font-size: 16px;
    padding: 0px 15px;
    border-radius: 6px;
    color: white;
    background-color: #226292;
    border: 1px solid #3a5b73;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  htmlType = "button",
  type = "default",
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type={type} // используем antType для стиля кнопки
      htmlType={htmlType}
      disabled={disabled}
      onClick={onClick} // явно передаем onClick
      {...props}
    >
      {children}
    </StyledButton>
  );
};
