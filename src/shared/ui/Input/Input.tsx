import React, { ChangeEventHandler, Ref } from "react";
import { Input as AntInput } from "antd";
import styled from "styled-components";
import { inputMixin, inputPasswordMixin } from "@/shared/styles/mixins";

interface InputProps {
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  type?: "text" | "password";
}

const StyledInput = styled(AntInput)`
  ${inputMixin}
`;

const StyledPasswordInput = styled(AntInput.Password)`
  ${inputPasswordMixin}
`;

export const Input: React.FC<InputProps> = ({
  value,
  disabled = false,
  onChange,
  placeholder,
  ref,
  type = "text",
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      {type === "password" ? (
        <StyledPasswordInput
          value={value}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
        />
      ) : (
        <StyledInput
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
