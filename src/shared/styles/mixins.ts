import { css } from "styled-components";

export const inputMixin = css`
  && {
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #00000073;
    background-color: transparent;

    &:hover,
    &:focus {
      border-color: black;
      box-shadow: none;
    }

    &::placeholder {
      color: #00000073;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const inputPasswordMixin = css`
  && {
    padding: 5px 10px;
    border: 1px solid #00000073;
    border-radius: 6px;
    background-color: transparent;
    box-shadow: none !important;
    font-size: 16px;

    &:hover,
    &:focus {
      border-color: black;
      box-shadow: none;
    }

    .ant-input {
      &::placeholder {
        color: #00000073;
      }
    }

    &.ant-input-affix-wrapper-disabled {
      opacity: 0.5;
    }
  }
`;
