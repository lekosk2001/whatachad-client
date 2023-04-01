import React from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import styled from "styled-components";
import { PageDesc, PageSubDesc } from "./Page";

type Props = {
  title: string;
  budget: number;
};

const ManagePageHeader = (props: Props) => {
  return (
    <PageHeader>
      <PageHeaderLeftSide>
        <PageDesc>{props.title}</PageDesc>
        <PageSubDesc>
          일일예산 :{" "}
          {String(props.budget)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </PageSubDesc>
      </PageHeaderLeftSide>
      <ScheduleSelector>
        <TodayButton>이번 달</TodayButton>
        <BsFillArrowLeftSquareFill />
        <Date>2023-03</Date>
        <BsFillArrowRightSquareFill />
      </ScheduleSelector>
    </PageHeader>
  );
};

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageHeaderLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Date = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #fff;
  color: #000;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s all ease;
  :hover {
    background: #999999;
  }
`;

const TodayButton = styled.div`
  font-size: 13px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 4px;
  background: #fff;
  color: #000;
  cursor: pointer;
  margin-right: 15px;
  transition: 0.2s all ease;
  :hover {
    background: #999999;
  }
`;

const ScheduleSelector = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  svg {
    color: #fff;
    cursor: pointer;
    height: 30px;
    width: 30px;
    transition: 0.2s all ease;
    :hover {
      color: #999999;
    }
  }
`;

export default ManagePageHeader;
