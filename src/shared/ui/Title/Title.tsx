import { Typography } from "antd";
import React from "react";
import styled from "styled-components";

interface TitleProps {
  content: string;
}
const { Title } = Typography;

const StyledTitle = styled(Title)`
  font-size: 24px;
  font-weight: 400;
`;

export const CustomTitle: React.FC<TitleProps> = ({ content }) => {
  return <StyledTitle>{content}</StyledTitle>;
};
