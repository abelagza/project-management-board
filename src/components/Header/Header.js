import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #d96868;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 0 0 100px;
  @media (max-width: 768px) {
    align-items: center;
    padding: 5% 0;
  }
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Project Management Board</Title>
  </HeaderWrapper>
);

export default Header;
