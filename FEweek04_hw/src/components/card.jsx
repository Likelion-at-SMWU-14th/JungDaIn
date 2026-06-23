import styled from 'styled-components';
import Label from './Label';

const CardBox = styled.div`
    width: 507px;
    height: 532px;
    border-radius: 20px;
    border: 2px dashed #878787;
    padding: 20px;
    text-align: center;
    position: relative;
`;

const CardImg = styled.img`
    width: 293px;
    height: 332px;
    object-fit: cover;
    border-radius: 12px;
    margin: 10px 0;
`;

const CardName = styled.h3`
    color: #000;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px; /* 125% */
`;

const CardDesc = styled.p`
    color: #000;
    font-size: 27px;
    font-weight: 400;
    line-height: 40px;
    white-space: pre-line;   /* \n 줄바꿈 적용 */
`;

const Card = ({ name, category, desc, image }) => {
  return (
    <CardBox>
        {/* 삼항연산자: category가 양식이면 "양식", 아니면 "한식" */}
        <Label category={category === '양식' ? '양식' : '한식'} />
        <CardImg src={image} alt={name} />
        <CardName>{name}</CardName>
        <CardDesc>{desc}</CardDesc>
    </CardBox>
  );
};

export default Card;