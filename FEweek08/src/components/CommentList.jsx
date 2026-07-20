import Comment from "./Comment";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  const getComment = () => {
    axios
        .get("http://127.0.0.1:8000/entries/")
        .then((res) => {
            console.log(res);
            setComments(res.data.reverse());
        })
        .catch((err) => {
            console.log(err);
        });
  };
  useEffect(() => {
    getComment();
  }, []);

  return (
    <CommentWrapper>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </CommentWrapper>
  );
};

export default CommentList;

const CommentWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 2rem 3.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem 1.75rem;
`;