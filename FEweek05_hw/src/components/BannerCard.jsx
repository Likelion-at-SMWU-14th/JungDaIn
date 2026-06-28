import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: ${(props) => props.bgColor || "#f5f5f5"};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 48%;
  min-height: 160px;
`;

const TextArea = styled.div``;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.dark ? "#ffffff" : "#222222"};
  margin-bottom: 8px;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: ${(props) => props.dark ? "#cccccc" : "#888888"};
`;

const BookImage = styled.img`
  width: 100px;
  height: 130px;
  object-fit: cover;
  border-radius: 4px;
`;

function BannerCard({ title, subTitle, imgSrc, bgColor, dark }) {
  return (
    <CardWrapper bgColor={bgColor}>
      <TextArea>
        <Title dark={dark}>{title}</Title>
        <SubTitle dark={dark}>{subTitle}</SubTitle>
      </TextArea>
      <BookImage src={imgSrc} alt={title} />
    </CardWrapper>
  );
}

export default BannerCard;