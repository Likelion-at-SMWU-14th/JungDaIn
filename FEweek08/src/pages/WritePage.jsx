import React from "react";
import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const WritePage = () => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const postComment = () => {
    axios
        .post(`http://127.0.0.1:8000/entries/`, {
            author: author,
            comment: comment,
        })
        .then((res) => {
            alert("게시글 작성이 완료되었어요 ! !");
            console.log("게시글 작성이 완료되었습니다.");
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            alert("게시글 작성에 실패했어요 . .");
        });
  };

  return (
    <WritePageWrapper>
      <CommentForm
        author={author}
        comment={comment}
        setAuthor={setAuthor}
        setComment={setComment}
      />
      <ButtonWrapper>
        <Button text="작성하기" onBtnClick={postComment} />
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