import * as S from "../styles/styled";

export default function RecipeForm() {
  return (
    <S.FormPanel onSubmit={(event) => event.preventDefault()}>
      <S.FormTitle>레시피 추가</S.FormTitle>

      <S.FormLabel htmlFor="recipe-name">레시피 이름</S.FormLabel>
      <S.FieldInput id="recipe-name" placeholder="예: 🍙 참치 주먹밥" />

      <S.FormLabel htmlFor="ingredients">재료</S.FormLabel>
      <S.FieldInput id="ingredients" placeholder="쉼표로 구분해 주세요!" />

      <S.FormLabel htmlFor="instructions">조리법</S.FormLabel>
      <S.FieldTextarea
        id="instructions"
        rows={5}
        placeholder="조리 순서를 간단히 적어 주세요!"
      />

      <S.PrimaryButton type="submit">레시피 저장</S.PrimaryButton>
    </S.FormPanel>
  );
}