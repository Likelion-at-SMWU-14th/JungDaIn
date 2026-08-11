import styled, { createGlobalStyle } from "styled-components";

/* 전역 스타일 및 폰트 */
export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
      "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    background: #f5f7fb;
    color: #182230;
  }
`;

/* 레이아웃 */
export const Page = styled.div`
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 680px;
  background: #fff;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 24px rgba(26, 35, 53, 0.08);
  border: 1px solid #eef1f6;
`;

/* 타이틀 */
export const H1 = styled.h1`
  margin: 4px 4px 20px;
  font-size: 24px;
  letter-spacing: -0.2px;
`;

/* 인풋 row */
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-bottom: 16px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  background: #fafbff;

  &:focus {
    border-color: #5672ff;
    box-shadow: 0 0 0 4px rgba(86, 114, 255, 0.12);
    background: #fff;
  }
`;

/* 버튼 */
export const Button = styled.button`
  height: 44px;
  padding: 0 14px;
  border: none;
  border-radius: 12px;
  background: #eef1f7;
  color: #1d2a3b;
  cursor: pointer;
  font-weight: 600;
  transition:
    transform 0.06s ease,
    box-shadow 0.2s,
    background 0.2s;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background: #e6ebf5;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const PrimaryButton = styled(Button)`
  background: #5b79ff;
  color: #fff;
  box-shadow: 0 6px 16px rgba(91, 121, 255, 0.28);

  &:hover {
    background: #4f6af0;
  }
`;

export const DeleteButton = styled(Button)`
  background: #ffe9e9;
  color: #c43d3d;
  padding: 8px 10px;
  height: 36px;

  &:hover {
    background: #ffdede;
  }
`;

/* 리스트 */
export const List = styled.ul`
  margin: 0;
  padding: 6px;
  list-style: none;
  display: grid;
  gap: 10px;
`;

export const Empty = styled.li`
  color: #8b95a1;
  padding: 14px 8px;
`;

/* 체크아이템 */
export const ItemRow = styled.li`
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #eef1f6;
  border-radius: 14px;
  padding: 10px 12px;
  box-shadow: 0 4px 14px rgba(26, 35, 53, 0.06);
`;

/* 체크박스 */
export const Check = styled.label`
  position: relative;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;

  input {
    opacity: 0;
    width: 20px;
    height: 20px;
    margin: 0;
    position: absolute;
    cursor: pointer;
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 2px solid #cbd5e1;
    transition: all 0.2s ease;
    background: #fff;
    display: grid;
    place-items: center;
  }

  input:focus-visible + span {
    box-shadow: 0 0 0 4px rgba(86, 114, 255, 0.12);
    border-color: #5672ff;
  }

  input:checked + span {
    background: #5b79ff;
    border-color: #5b79ff;
    box-shadow: 0 0 0 4px rgba(91, 121, 255, 0.15) inset;
  }

  span::after {
    content: "";
    width: 3px;
    height: 6px;
    border-right: 1.5px solid transparent;
    border-bottom: 1.5px solid transparent;
    transform: rotate(45deg) scale(0.85);
    transition:
      transform 0.2s ease,
      opacity 0.2s ease,
      border-color 0.2s ease;
    opacity: 0;
  }

  input:checked + span::after {
    border-right-color: #fff;
    border-bottom-color: #fff;
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;

/* 아이템 타이틀 */
export const ItemTitle = styled.span`
  font-size: 15px;
  line-height: 1.4;
  color: #1e293b;
  word-break: break-word;

  &.done {
    color: #94a3b8;
    text-decoration: line-through;
  }
`;
