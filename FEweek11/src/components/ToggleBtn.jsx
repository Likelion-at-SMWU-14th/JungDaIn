import { useState } from "react";
import styled from "styled-components";

const ToggleBtn = () => {
  const [isDark, setIsDark] = useState(false); // 기본값: 라이트

  return (
    <ToggleButton onClick={() => setIsDark((prev) => !prev)}>
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </ToggleButton>
  );
};

export default ToggleBtn;

const ToggleButton = styled.button`
  padding: 9px 18px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1f1b17;
  background-color: transparent;
  border: 1px solid #e4ddd0;
  border-radius: 30px;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: #b8860b;
  }
`;
