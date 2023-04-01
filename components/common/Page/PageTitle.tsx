import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import styled from "styled-components";

type Props = {
  title: string;
  location: string;
};

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 72px;
`;

export const Location = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 15px;
`;

const PageTitle = (props: Props) => {
  return (
    <TitleContainer>
      <Title>{props.title}</Title>
      <Location>
        <HiLocationMarker /> {props.location}
      </Location>
    </TitleContainer>
  );
};

export default PageTitle;
