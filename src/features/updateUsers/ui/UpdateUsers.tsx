import { Users } from "@/entities/users/model";
import { useNotification } from "@/shared/hooks";
import { Button, Field, Modal } from "@/shared/ui";
import { isValidImageUrl } from "@/shared/utils";
import { Space } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUpdateUserMutation } from "../model/hooks/useUpdateUsers";

interface UpdateUsersProps {
  user: Users | null;
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

const StyledFooterButton = styled(Space)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const UpdateUsers: React.FC<UpdateUsersProps> = ({
  isOpen,
  handleCancel,
  user,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const { showNotification } = useNotification();

  const updateUserMutation = useUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar);
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) {
      showNotification(
        "error",
        "Ошибка обновления пользователя",
        "Пользователь не выбран",
      );
      return;
    }

    if (!name || !avatar) {
      showNotification(
        "error",
        "Ошибка обновления пользователя",
        "Необходимо ввести все данные",
      );
      return;
    }

    if (!isValidImageUrl(avatar)) {
      showNotification(
        "error",
        "Ошибка обновления пользователя",
        "Необходимо ввести корректную ссылку на аватарку",
      );
      return;
    }
    updateUserMutation.mutate({ id: user.id, data: { name, avatar } });
    handleCancel();
  };
  return (
    <Modal
      title="Редактирование пользователя"
      isOpen={isOpen}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      listButton={
        <StyledFooterButton>
          <Button key="delete">Удалить</Button>
          <Space direction="horizontal" size="small">
            <Button key="save" onClick={handleSave}>
              Сохранить
            </Button>
            <Button key="cancel" onClick={handleCancel}>
              Отмена
            </Button>
          </Space>
        </StyledFooterButton>
      }
    >
      <StyledCreateForm>
        <Field isDisabled id="id" label="id" value={user?.id || ""} />
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
