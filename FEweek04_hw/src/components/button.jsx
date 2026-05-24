import styled from 'styled-components';

const ActiveButton = styled.button`
  width: 164px;
  height: 55px;
  border-radius: 30px;
  background: #FF9CB6;
  border: none;
  cursor: pointer;
  color: #382020;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "KyoboHandwriting", cursive;
`;

const InactiveButton = styled.button`
  width: 164px;
  height: 55px;
  border-radius: 30px;
  background: #FDD6E0;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "KyoboHandwriting", cursive;
`;

const Button = ({ label, isActive }) => {
  return isActive
    ? <ActiveButton>{label}</ActiveButton>
    : <InactiveButton>{label}</InactiveButton>;
};

export default Button;