import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Pretendard, "Noto Sans KR", system-ui, sans-serif;
    color: #202632;
    background: #fafbfe;
    font-synthesis: none;
  }

  * { box-sizing: border-box; }
  body { margin: 0; }
  button, input, textarea { font: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: wait; opacity: .58; }

  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid #ff893a;
    outline-offset: 2px;
  }
`;

export const Page = styled.main`
  width: min(990px, calc(100% - 32px));
  margin: 0 auto;
  padding: 16px;
  background: #fff;
  border: 1px solid #e9edf4;
  border-radius: 10px;
  box-shadow: 0 10px 28px #2633440c;

  @media (min-width: 851px) and (min-height: 760px) {
    position: relative;
    top: 50vh;
    transform: translateY(-50%);
  }

  @media (max-width: 850px), (max-height: 759px) {
    margin: 24px auto;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2.15fr) minmax(270px, 1fr);
  gap: 14px;
  align-items: stretch;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const ListPanel = styled.section`
  min-width: 0;
  padding: 14px;
  border: 1px solid #e5eaf2;
  border-radius: 8px;
`;

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 13px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 19px;
  letter-spacing: -0.035em;
`;

export const RecipeCount = styled.span`
  color: #687386;
  font-size: 12px;
`;

export const PantryPanel = styled.form`
  padding: 13px;
  margin-bottom: 12px;
  border: 1px solid #e5eaf2;
  border-radius: 7px;
  background: #fafbfd;
`;

export const PantryLabel = styled.label`
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: 700;
`;

export const PantryRow = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const field = css`
  width: 100%;
  min-width: 0;
  padding: 10px 11px;
  border: 1px solid #d6deeb;
  border-radius: 6px;
  background: #fff;
  color: #202632;
  font-size: 13px;
  line-height: 1.5;
  outline: none;

  &::placeholder {
    color: #8995a7;
  }
  &:focus {
    border-color: #ff893a;
    box-shadow: 0 0 0 2px #ff893a26;
  }
`;

export const PantryInput = styled.input`
  ${field}
  flex: 1;
`;

export const PantryButton = styled.button`
  padding: 8px 14px;
  border: 1px solid #ff893a;
  border-radius: 6px;
  background: #ff893a;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
`;

export const PantryHint = styled.p`
  margin: 7px 0 0;
  color: #687386;
  font-size: 11px;
`;

export const Cards = styled.div<{ $scroll?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  max-height: ${({ $scroll }) => ($scroll ? "530px" : "none")};
  padding-right: ${({ $scroll }) => ($scroll ? "6px" : "0")};
  overflow-y: ${({ $scroll }) => ($scroll ? "auto" : "visible")};
  scrollbar-width: thin;
  scrollbar-color: #cdd2dc transparent;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  padding: 36px 16px;
  border: 1px dashed #d6deeb;
  border-radius: 7px;
  color: #687386;
  font-size: 12px;
  text-align: center;
`;

export const ErrorNotice = styled.div`
  margin-bottom: 12px;
  padding: 10px 12px;
  border: 1px solid #ffc9ae;
  border-radius: 7px;
  background: #fff1e9;
  color: #ff893a;
  font-size: 13px;
`;

export const FormPanel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 15px 17px;
  border: 1px solid #e5eaf2;
  border-radius: 8px;
  background: #fff;
`;

export const FormTitle = styled(SectionTitle)`
  margin-bottom: 6px;
`;

export const FormDescription = styled.p`
  margin: -4px 0 0;
  color: #687386;
  font-size: 13px;
`;

export const FormLabel = styled.label`
  margin-top: 9px;
  font-size: 13px;
  font-weight: 700;
`;

export const FieldInput = styled.input`
  ${field}
`;
export const FieldTextarea = styled.textarea`
  ${field}
  resize: vertical;
`;

export const PrimaryButton = styled.button`
  margin-top: 14px;
  padding: 11px;
  border: 1px solid #ff893a;
  border-radius: 6px;
  background: #ff893a;
  color: #fff;
  font-weight: 700;
`;

export const Card = styled.article<{ $ready: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 220px;
  padding: 12px;
  border: 1px solid ${({ $ready }) => ($ready ? "#ffb989" : "#e4e9f1")};
  border-radius: 7px;
  background: ${({ $ready }) => ($ready ? "#fffcf9" : "#fff")};
`;

export const CardMark = styled.span<{ $ready: boolean }>`
  flex-shrink: 0;
  padding: 4px 7px;
  border-radius: 20px;
  background: ${({ $ready }) => ($ready ? "#ff893a" : "#f1f2f4")};
  color: ${({ $ready }) => ($ready ? "#fff" : "#626b77")};
  font-size: 10px;
  font-weight: 700;
`;

export const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 0 9px;
  font-size: 16px;
`;

export const CardLabel = styled.p`
  margin: 0 0 2px;
  font-size: 12px;
  font-weight: 700;
`;

export const CardText = styled.p`
  margin: 0 0 9px;
  color: #3e4858;
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
`;

export const MissingRow = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 5px;
  margin: -2px 0 10px;
  color: #687386;
  font-size: 11px;
`;

export const MissingNames = styled.span`
  max-width: 100%;
  padding: 3px 7px;
  border-radius: 5px;
  background: #fff3e9;
  color: #ff893a;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 7px;
  margin-top: auto;
  padding-top: 5px;
`;

export const CardButton = styled.button<{ $danger?: boolean }>`
  min-width: 0;
  padding: 6px 8px;
  border: 1px solid ${({ $danger }) => ($danger ? "#f1c8b4" : "#ccd3dd")};
  border-radius: 6px;
  background: #fff;
  color: ${({ $danger }) => ($danger ? "#ff893a" : "#28303c")};
  font-size: 11px;
  font-weight: 600;
`;
