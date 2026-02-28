import { routePaths } from "@/shared/config";
import { Button } from "@/shared/ui";
import { Result } from "antd";
import React from "react";
import { useNavigate } from "react-router";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(routePaths.login);
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, страница, которую вы посетили, не существует"
      extra={<Button onClick={handleClickBack}>Вернуться обратно</Button>}
    />
  );
};
