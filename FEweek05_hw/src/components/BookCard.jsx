import styled from "styled-components";

const CardWrapper = styled.div`
  width: 200px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
  display: block;
`;

const BookTitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: ${(props) => (props.highlight ? "bold" : "normal")};
  color: ${(props) => (props.highlight ? "#1a1a1a" : "#333333")};
  line-height: 1.4;
`;

function BookCard({ imgSrc, title, highlight }) {
  return (
    <CardWrapper>
      <Thumbnail src={imgSrc} alt={title} />
      <BookTitle highlight={highlight}>{title}</BookTitle>
    </CardWrapper>
  );
}

export default BookCard;