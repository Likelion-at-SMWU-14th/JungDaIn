import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import DetailComment from "../components/DetailComment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [ detail, setDetail ] = useState(null);

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

  useEffect(() => {
    getDetail(id);
  }, [id]);

  if (!detail) return null;

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