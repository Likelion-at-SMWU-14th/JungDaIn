import React from "react";
import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WritePage = () => {
  const navigate = useNavigate();
  return (
    <WritePageWrapper>
      <CommentForm />
      <ButtonWrapper>
        <Button text="작성하기" />
        <Button text="취소" onBtnClick={() => navigate(-1)} />
      </ButtonWrapper>
    </WritePageWrapper>
  );
};

export default WritePage;

const WritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.2rem 3.88rem;
  background-color: var(--bg-light);
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;