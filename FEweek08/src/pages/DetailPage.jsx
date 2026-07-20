import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import DetailComment from "../components/DetailComment";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [detail, setDetail] = useState([]);

  const getDetail = (id) => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [deleteError, setDeleteError] = useState(false);

  const deleteComment = () => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!isConfirmed) return;

    axios
      .delete(`http://127.0.0.1:8000/entries/${id}/`)
      .then((res) => {
        console.log("게시글 삭제가 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setDeleteError(true);
      });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <DetailPageWrapper>
      <DetailComment detail={detail} />
      <ButtonWrapper>
        <Button text="수정하기" onBtnClick={() => navigate(`/edit/${id}`)} />
        <Button text="삭제하기" onBtnClick={deleteComment} />
        {deleteError && <Message>게시글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요 !!</Message>}
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