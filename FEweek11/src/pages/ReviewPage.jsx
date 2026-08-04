import styled, { createGlobalStyle } from "styled-components";
import ReviewList from "../components/ReviewList";

const ReviewPage = () => {
  return (
    <Wrapper>
      <Content>
        <ReviewList />
      </Content>
    </Wrapper>
  );
};

export default ReviewPage;

const Wrapper = styled.div`
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  padding: 20px 60px 100px;
`;
