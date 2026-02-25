import React, { ChangeEventHandler, Ref } from "react";
import { Input as AntInput } from "antd";
import styled from "styled-components";
import { inputMixin, inputPasswordMixin } from "@/shared/styles/mixins";

interface InputProps {
  id: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password";
}

const StyledInput = styled(AntInput)`
  ${inputMixin}
`;

const StyledPasswordInput = styled(AntInput.Password)`
  ${inputPasswordMixin}
`;

export const Input: React.FC<InputProps> = ({
  id,
  value,
  disabled = false,
  onChange,
  placeholder,
  type = "text",
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      {type === "password" ? (
        <StyledPasswordInput
          id={id}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
        />
      ) : (
        <StyledInput
          id={id}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
        />
      )}
    </>
  );
};
