import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import dummy from "../data/dummy.json";

const ReviewList = () => {
  return (
    <List>
      {dummy.data.map((review, idx) => (
        <ReviewItem
          key={idx}
          img={review.img}
          title={review.title}
          comment={review.comment}
        />
      ))}
    </List>
  );
};

export default ReviewList;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 10px;
`;
