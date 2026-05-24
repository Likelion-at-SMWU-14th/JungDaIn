import styled from 'styled-components';

const StyledLabel = styled.span`
  width: 60px;
  height: 40px;
  border: 2px solid #BDBDBD;
  background: #F3E1E6;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; 
  top: -15px;
  left: -15px;
`;

const Label = ({ category }) => {
  return <StyledLabel>{category}</StyledLabel>;
};

export default Label;