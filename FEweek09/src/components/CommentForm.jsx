import styled from "styled-components";

const CommentForm = ({ comment, setComment }) => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Label htmlFor="comment">내용</Label>

        <TextArea
          id="comment"
          name="comment"
          placeholder="내용을 입력해주세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          autoFocus
        />
      </InputWrapper>
    </FormWrapper>
  );
};

export default CommentForm;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3.75rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  border-radius: 0.4375rem;
  background: var(--bg-white);
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
`;

const Label = styled.label`
  margin: 0;
  color: var(--text-black);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TextArea = styled.textarea`
  display: flex;
  height: 10.3125rem;
  padding: 1.5rem;
  align-items: flex-start;
  gap: 0.625rem;
  border: none;
  outline: none;
  resize: none;
  border-radius: 0.4375rem;
  background: rgba(245, 241, 237, 0.5);
  color: var(--text-black);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  &::placeholder {
    color: var(--text-brown);
  }
`;
