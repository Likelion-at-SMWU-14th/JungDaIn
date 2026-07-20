import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { COMMENT_DATA } from "../constant/comment";
import DetailComment from "../components/DetailComment";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const detail = COMMENT_DATA.find((comment) => comment.id === Number(id));
  return (
    <DetailPageWrapper>
      <DetailComment detail={detail} />
      <ButtonWrapper>
        <Button text="수정하기" />
        <Button text="삭제하기" />
      </ButtonWrapper>
    </DetailPageWrapper>
  );
};

export default DetailPage;

const DetailPageWrapper = styled.div`
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