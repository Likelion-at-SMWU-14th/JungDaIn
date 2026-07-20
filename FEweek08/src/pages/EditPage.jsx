import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((res) => {
        setAuthor(res.data.author);
        setComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const putComment = () => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, {
        author: author,
        comment: comment,
      })
      .then((res) => {
        console.log("게시글 수정이 완료되었습니다.");
        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        console.log(err);
        alert("게시글 수정에 실패했습니다.");
      });
  };

  if (loading) {
    return <Message>게시글을 불러오는 중입니다 . . .</Message>;
  }
  if (error) {
    return <Message>게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요 !!</Message>;
  }

  return (
    <EditPageWrapper>
      <CommentForm
        author={author}
        comment={comment}
        setAuthor={setAuthor}
        setComment={setComment}
      />
      <ButtonWrapper>
        <Button text="수정하기" onBtnClick={putComment} />
        <Button text="취소" onBtnClick={() => navigate(-1)} />
      </ButtonWrapper>
    </EditPageWrapper>
  );
};

export default EditPage;

const EditPageWrapper = styled.div`
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