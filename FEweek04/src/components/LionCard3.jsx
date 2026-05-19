import lion3 from '../assets/lion3.png'
import styled from 'styled-components'

const Card = styled.div`
  width: 280px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin: 20px auto;
`

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
`

const CardTitle = styled.h1`
  font-size: 24px;
  color: #333;
`

const CardText = styled.p`
  font-size: 16px;
  color: #555;
`

const LionCard3 = () => {
    const isReal = false
    return (
        <Card>
            <CardImage src={lion3} />
            <CardTitle> 3번 사자 </CardTitle>
            <CardText>
                {isReal ? '진짜 아기사자랍니다 !!' : '땡! 저는 가짜 아기사자에요'}
            </CardText>
        </Card>
    )
}

export default LionCard3