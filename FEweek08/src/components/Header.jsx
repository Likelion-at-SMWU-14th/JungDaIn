import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = ({ title, description, button }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </HeaderInfo>
      {button && (
        <Button text="TMI 작성하기" onBtnClick={() => navigate("/write")} />
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 11.75rem;
  padding: 3.75rem 3.5rem 0 3.5rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.875rem;
  border-bottom: 1px solid var(--text-brown);
  background: rgba(255, 255, 255, 0.9);
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
`;

const Title = styled.h1`
  margin: 0;
  color: #000;
  font-size: 2.25rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0;
  color: var(--text-brown);
  font-size: 1.25rem;
  font-weight: 500;
`;