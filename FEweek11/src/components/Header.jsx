import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import ToggleBtn from "./ToggleBtn";
import TitleContext from "../context/TitleContext";

const Header = () => {
  const navigate = useNavigate();
  const title = useContext(TitleContext);

  return (
    <HeaderBar>
      <Logo>{title}</Logo>
      <Actions>
        <ToggleBtn />
        <WriteButton onClick={() => navigate("/create")}>리뷰 작성</WriteButton>
      </Actions>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 60px;
  background-color: #f7f3ec;
  border-bottom: 1px solid #e4ddd0;
`;

const Logo = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #1f1b17;

  span {
    color: #b8860b;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const WriteButton = styled.button`
  padding: 10px 22px;
  font-size: 14px;
  color: #fff;
  background-color: #b8860b;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #c89a3c;
  }
`;
