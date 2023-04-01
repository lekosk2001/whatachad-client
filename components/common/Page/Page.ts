import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PageDesc = styled.h2`
  font-weight: normal;
`;

export const PageSubDesc = styled.p`
  font-size: 13px;
  color: gray;
`;

export const PageContentsBox = styled.div`
  background: #333333;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  gap: 20px;
`;

export const ListBox = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
