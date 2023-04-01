import styled from "styled-components";

export const DayBlockBlank = styled.div`
  width: 100%;
  border-radius: 3px;
`;

export const DayBlock = styled.div`
  white-space: nowrap;
  min-height: 140px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  padding: 10px;
  transition: 0.1s all ease;
  background: #222222;
`;

export const DayBlockNumber = styled.p`
  font-size: 11px;
  margin-bottom: 10px;
`;

export const DayBlockText = styled.p<{ completed: boolean }>`
  opacity: ${(props) => (props.completed ? 0.3 : "")};
  font-size: 15px;
  overflow: hidden;
  padding: 3px 10px;
  border-radius: 3px;
  transition: 0.1s all ease;
  cursor: pointer;
  &:hover {
    background: #666666;
    /* text-decoration: underline; */
  }
`;

export const CurrentYearMini = styled.p`
  font-weight: 400;
  font-size: 9px;
  line-height: 9px;
`;

export const DayText = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 11px;
  color: gray;
`;

export const DayBlockContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;
