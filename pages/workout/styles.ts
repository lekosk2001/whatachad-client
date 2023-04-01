import styled from "styled-components";

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const MapIcon = styled.div`
  background: white;
  height: 30px;
  border-radius: 5px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorkoutListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  /* @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  } */

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
