import { useContext } from "react";
import TitleContext from "../context/TitleContext";
import { useNavigate } from "react-router";
import styled from "styled-components";

const CreatePage = () => {
  const navigate = useNavigate();
  const title = useContext(TitleContext);

  return (
    <Wrapper>
      <Title>{title} 리뷰 작성</Title>

      <Field>
        <Label>영화 포스터</Label>
        <FileInput type="file" />
      </Field>

      <Field>
        <Label>영화 제목</Label>
        <TextInput type="text" placeholder="영화 제목을 입력하세요" />
      </Field>

      <Field>
        <Label>영화 리뷰</Label>
        <TextArea placeholder="영화에 대한 생각을 남겨보세요" />
      </Field>

      <SubmitButton onClick={() => navigate("/")}>작성 완료</SubmitButton>
    </Wrapper>
  );
};

export default CreatePage;

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 30px 100px;
  background-color: #f7f3ec;
  color: #1f1b17;
`;

const Title = styled.h1`
  margin: 0 0 40px;
  font-family: "Playfair Display", serif;
  font-size: 32px;
  font-weight: 700;
`;

const Field = styled.div`
  max-width: 500px;
  margin-bottom: 28px;
`;

const Label = styled.h3`
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 600;
  color: #6b6259;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1f1b17;
  background-color: #ffffff;
  border: 1px solid #e4ddd0;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: #b8860b;
  }
`;

const FileInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 13px;
  color: #6b6259;
  background-color: #ffffff;
  border: 1px dashed #e4ddd0;
  border-radius: 10px;

  &::file-selector-button {
    margin-right: 12px;
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background-color: #b8860b;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 14px 16px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1f1b17;
  background-color: #ffffff;
  border: 1px solid #e4ddd0;
  border-radius: 10px;
  outline: none;
  resize: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: #b8860b;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #b8860b;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #c89a3c;
  }
`;
