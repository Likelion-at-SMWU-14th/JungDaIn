import styled from "styled-components";
import useTheme from "../hooks/useTheme";

const ToggleBtn = () => {
  const { isDark, toggleTheme } = useTheme(); // 기본값: 라이트

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </ToggleButton>
  );
};

export default ToggleBtn;

const ToggleButton = styled.button`
  padding: 9px 18px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid #e4ddd0;
  border-radius: 30px;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: #b8860b;
  }
`;
