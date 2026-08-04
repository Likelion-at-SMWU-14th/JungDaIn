import styled from "styled-components";

const ReviewItem = ({ title, comment, img }) => {
  return (
    <ReviewDiv>
      <Poster src={img} alt="movieimg" />
      <Sprocket />
      <Body>
        <Title>{title || "제목"}</Title>
        <Comment>{comment || "리뷰"}</Comment>
      </Body>
    </ReviewDiv>
  );
};

export default ReviewItem;

const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;

const Sprocket = styled.div`
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #b8860b,
    #b8860b 4px,
    transparent 4px,
    transparent 10px
  );
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px;
`;

const Title = styled.div`
  margin-bottom: 8px;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Comment = styled.div`
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.muted};
`;
