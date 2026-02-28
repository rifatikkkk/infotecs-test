import { Button, Field, Modal } from "@/shared/ui";
import { Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { useCreateUserMutation } from "../model/hooks/useCreateUsers";
import { useNotification } from "@/shared/hooks";
import { isValidImageUrl } from "@/shared/utils";

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
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const { showNotification } = useNotification();

  const createUserMutation = useCreateUserMutation();

  const handleCreate = async () => {
    if (!name || !avatar) {
      showNotification(
        "error",
        "Ошибка создания пользователя",
        "Необходимо ввести все данные",
      );
      return;
    }

    if (!isValidImageUrl(avatar)) {
      showNotification(
        "error",
        "Ошибка создания пользователя",
        "Необходимо ввести корректную ссылку на аватарку",
      );
      return;
    }

    createUserMutation.mutate({
      name,
      avatar,
    });
    handleCancel();
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
        <Field id="name" label="Имя" value={name} onChange={setName} />
        <Field
          id="avatar"
          label="Ссылка на аватарку"
          value={avatar}
          onChange={setAvatar}
        />
      </StyledCreateForm>
    </Modal>
  );
};
