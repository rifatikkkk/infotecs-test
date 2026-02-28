import { Button, Field, Modal } from "@/shared/ui";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";

interface UpdateUsersProps {
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
}) => {
  return (
    <Modal
      title="Редактирование пользователя"
      isOpen={isOpen}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      listButton={[
        <StyledFooterButton>
          <Button key="delete">Удалить</Button>
          <Space direction="horizontal" size="small">
            <Button key="save" onClick={handleCancel}>
              Сохранить
            </Button>
            <Button key="cancel" onClick={handleCancel}>
              Отмена
            </Button>
          </Space>
        </StyledFooterButton>,
      ]}
    >
      <StyledCreateForm>
        <Field isDisabled id="id" label="id" value="1" onChange={() => {}} />
        <Field id="name" label="Имя" value="name" onChange={() => {}} />
        <Field
          id="avatar"
          label="Ссылка на аватарку"
          value="avatar"
          onChange={() => {}}
        />
      </StyledCreateForm>
    </Modal>
  );
};
