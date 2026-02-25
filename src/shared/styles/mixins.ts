import { css } from "styled-components";

export const inputMixin = css`
  && {
    width: 400px;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #00000073;
    background-color: transparent;

    &:hover {
      border-color: black;
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
    position: relative;
    width: 400px;
    display: flex;
    align-items: center;

    .ant-input {
      padding: 10px 30px 10px 15px;
      font-size: 16px;
      border: 1px solid #00000073;
      border-radius: 6px;
      flex: 1;
      background-color: transparent;
      box-shadow: none !important;

      &::placeholder {
        color: #00000073;
      }

      &:hover {
        border-color: black;
      }

      &:disabled {
        opacity: 0.5;
      }
    }

    .ant-input-suffix {
      position: absolute;
      right: 10px;
    }

    .ant-input-password-icon {
      color: #00000073;
      cursor: pointer;

      &:hover {
        color: #000000e0;
      }
    }

    &:hover {
      border-color: black;
    }
  }
`;
