import styled from "styled-components";

const Tab = styled.span`
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#e8610a" : "#555555")};
  border-bottom: ${(props) => (props.active ? "2px solid #e8610a" : "none")};
  padding-bottom: 4px;
  cursor: pointer;
  margin-right: 16px;
`;

function CategoryTab({ label, active }) {
  return <Tab active={active}>{label}</Tab>;
}

export default CategoryTab;