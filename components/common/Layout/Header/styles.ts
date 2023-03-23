import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  height: 140px;
  padding: 0px 40px;
  align-content: center;

  @media (min-width: 767px) {
    /*  */
  }
`;

export const Logo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  white-space:nowrap;
`;

export const SearchTab = styled.div`
  background: #333333;
  border-radius: 25px;
  width: 100%;
  outline: none;
  display: flex;
  gap: 10px;
  align-items: center;  
  padding: 0px 15px;  
  transition: 0.2s all ease;
    input {
    background: transparent;
    border: none;
    color: white;
    font-size: 13px;
    width: 100%;
    height: 50px;
    outline: none;
  }

  &:hover{
    background: #222222;
  }
`;


export const SearchIcon = styled.div`
  min-width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 20px;
    height: 20px;
  }
`;

export const UserAuth = styled.ul`
  display: flex;
  list-style: none;  
  li a{
    white-space:nowrap;
    font-size: 15px;
    font-weight: 500;
    transition: 0.2s all ease;
    padding: 10px;
    height: 40px;
    &:hover{
      color: #666666;
    }
  }
`;
