import RecipeCard from "./components/RecipeCard";
import RecipeForm from "./components/RecipeForm";
import * as S from "./styles/styled";

export default function App() {
  return (
    <S.Page>
      <S.Layout>
        <S.ListPanel>
          <S.SectionHeading>
            <S.SectionTitle>오늘 만들 수 있는 요리</S.SectionTitle>
            <S.RecipeCount>레시피 목록</S.RecipeCount>
          </S.SectionHeading>

          <S.PantryPanel onSubmit={(event) => event.preventDefault()}>
            <S.PantryLabel htmlFor="pantry">지금 있는 재료</S.PantryLabel>
            <S.PantryRow>
              <S.PantryInput
                id="pantry"
                placeholder="예: 밥, 김치, 달걀, 대파"
              />
              <S.PantryButton type="submit">재료 확인</S.PantryButton>
            </S.PantryRow>
            <S.PantryHint>재료는 쉼표로 구분해 입력해 주세요.</S.PantryHint>
          </S.PantryPanel>

          <S.Cards>
            <RecipeCard />
          </S.Cards>
        </S.ListPanel>

        <aside>
          <RecipeForm />
        </aside>
      </S.Layout>
    </S.Page>
  );
}