import { useEffect, useState } from "react";
import { createRecipe, getRecipes } from "./api/recipes"
import RecipeCard from "./components/RecipeCard";
import RecipeForm from "./components/RecipeForm";
import * as S from "./styles/styled";
import type { CreateRecipeRequest, Recipe } from "./types/recipe";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function loadRecipes() {
    setLoading(true);
    try {
      setRecipes(await getRecipes());
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function  handleCreate(values: CreateRecipeRequest): Promise<boolean> {
    setSaving(true);
    try {
      const createdRecipe = await createRecipe(values);
      setRecipes((currentRecipes) => [...currentRecipes, createdRecipe]);
      return true;
    } catch (error: unknown) {
      console.error(error);
      return false;
    } finally {
      setSaving(false);
    }    
  }

  useEffect(() => {
    void loadRecipes();
  }, []);

  return (
    <S.Page>
      <S.Layout>
        <S.ListPanel>
          <S.SectionHeading>
            <S.SectionTitle>오늘 만들 수 있는 요리</S.SectionTitle>
            <S.RecipeCount>{recipes.length}개의 레시피</S.RecipeCount>
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

          {loading ? (
            <S.EmptyMessage>레시피를 불러오는 중이에요...</S.EmptyMessage>
          ) : recipes.length === 0? (
            <S.EmptyMessage>아직 등록된 레시피가 없어요.</S.EmptyMessage>
          ) : (
            <S.Cards>
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
          </S.Cards>
          )}
          
        </S.ListPanel>

        <aside>
          <RecipeForm disabled={saving} onSubmit={handleCreate}/>
        </aside>
      </S.Layout>
    </S.Page>
  );
}