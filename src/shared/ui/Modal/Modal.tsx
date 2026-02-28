import { Modal, ModalProps } from "antd";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface CustomModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  listButton: ModalProps["footer"] | null;
}

const StyledModal = styled(Modal)`
  && {
    .ant-modal-content {
      border-radius: 10px;
    }

    .ant-modal-header {
      padding: 30px 50px 10px 30px;
      border-radius: 10px 10px 0 0;
      border-bottom: 0;

      .ant-modal-title {
        font-size: 16px;
        font-weight: 600;
      }
    }

    .ant-modal-body {
      padding: 0 50px 0 30px;
    }

    .ant-modal-footer {
      padding: 20px 50px 30px 30px;
      border-top: 0;
    }
  }
`;

export const CustomModal: React.FC<CustomModalProps> = ({
  children,
  title,
  isOpen,
  handleOk,
  handleCancel,
  listButton,
}) => {
  return (
    <StyledModal
      title={title}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={listButton}
    >
      {children}
    </StyledModal>
  );
};
