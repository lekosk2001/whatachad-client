import styled from "styled-components";

export const NavigationTabContainer = styled.aside`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 240px;
  min-width: 240px;
`;


export const Tabs = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;


export const TabTitle = styled.h2`
  display: flex;
  flex-direction: column;
  list-style: none;
  transition: 0.2s all ease;
  margin-bottom: 5px;
  &:hover{
    color: #666666;
  }
`;

export const SingleTab = styled.li`
  a{
    cursor: pointer;
  }
`;

export const SingleTabLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;  
  transition: 0.2s all ease;
  &:hover{
    background-color: #333333;
    div{
      background-color: #000;
    }
  }
`;

export const RoundedMenuIcon = styled.div`
  background: #333333;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 18px;
    height: 18px;
  }
`;
