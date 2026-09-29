import * as S from "../styles/styled";

export default function RecipeCard() {
  return (
    <S.Card $ready={false}>
      <S.CardTitle>
        레시피 이름
        <S.CardMark $ready={false}>재료 확인 전</S.CardMark>
      </S.CardTitle>

      <S.CardLabel>재료</S.CardLabel>
      <S.CardText>레시피 재료 표시될 예정</S.CardText>

      <S.CardLabel>조리법</S.CardLabel>
      <S.CardText>레시피 조리법 표시될 예정</S.CardText>
    </S.Card>
  );
}