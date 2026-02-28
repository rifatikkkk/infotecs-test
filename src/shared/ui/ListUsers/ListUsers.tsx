import { Users } from "@/entities/users/model";
import { getFormatDate } from "@/shared/utils";
import { Avatar, List, Typography } from "antd";
import React from "react";
import styled from "styled-components";

type ListUsersProps = {
  data: Users[] | undefined;
  onItemClick: () => void;
};

const StyledTitle = styled(Typography)`
  && {
    font-size: 16px;
    cursor: pointer;
    color: black;
    font-weight: 600;
  }
`;

const StyledDescription = styled(Typography)`
  && {
    font-size: 16px;
    color: #00000073;
    font-weight: 400;
  }
`;

export const ListUsers: React.FC<ListUsersProps> = ({ data, onItemClick }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                onClick={onItemClick}
                src={item.avatar}
                style={{ cursor: "pointer" }}
              />
            }
            title={<StyledTitle onClick={onItemClick}>{item.name}</StyledTitle>}
            description={
              <StyledDescription>{`Зарегистрирован ${getFormatDate(item.createdAt)}`}</StyledDescription>
            }
          />
        </List.Item>
      )}
    />
  );
};
