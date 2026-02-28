import { Button, Field, Modal } from "@/shared/ui";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";

interface CreateUsersProps {
  isOpen: boolean;
  handleCancel: () => void;
}

const StyledCreateForm = styled(Space)`
  && {
    display: flex;
    flex-direction: column;

    .ant-space-item {
      width: 100%;
    }
  }
`;

export const CreateUsers: React.FC<CreateUsersProps> = ({
  isOpen,
  handleCancel,
}) => {
  const handleCreate = () => {
    console.log("create");
  };
  return (
    <Modal
      title="Создание пользователя"
      isOpen={isOpen}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      listButton={[
        <Button key="create" onClick={handleCreate}>
          Создать
        </Button>,
        <Button key="cancel" onClick={handleCancel}>
          Отмена
        </Button>,
      ]}
    >
      <StyledCreateForm>
        <Field id="name" label="Имя" />
        <Field id="avatar" label="Ссылка на аватарку" />
      </StyledCreateForm>
    </Modal>
  );
};
