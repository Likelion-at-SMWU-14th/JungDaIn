import { useEffect, useState, type SubmitEvent } from "react";
import { createRecipe, deleteRecipe, getErrorMessage ,getRecipes } from "./api/recipes"
import RecipeCard from "./components/RecipeCard";
import RecipeForm from "./components/RecipeForm";
import * as S from "./styles/styled";
import type { CreateRecipeRequest, Recipe } from "./types/recipe";
import { findMissingIngredients, parseIngredients } from "./utils/matchRecipes";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeleteingId] = useState<string | null>(null);

  const [pantryInput, setPantryInput] = useState("");
  const [pantryIngredients, setPantryIngredients] = useState<string[] | null>(
    null,
  );

  const [error, setError] = useState("");

  async function loadRecipes() {
    setLoading(true);
    setError("");
    try {
      setRecipes(await getRecipes());
    } catch (error: unknown) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(values: CreateRecipeRequest): Promise<boolean> {
    setSaving(true);
    setError("");

    try {
      const createdRecipe = await createRecipe(values);
      setRecipes((currentRecipes) => [...currentRecipes, createdRecipe]);
      return true;
    } catch (error: unknown) {
      setError(getErrorMessage(error));
      return false;
    } finally {
      setSaving(false);
    }    
  }

  async function handelDelete(id: Recipe["id"]) {
    setDeleteingId(id);
    setError("");

    try {
      await deleteRecipe(id);
      setRecipes((curruntRecipes) =>
        curruntRecipes.filter((recipe) => recipe.id !== id),
    );
    } catch (error: unknown) {
      setError(getErrorMessage(error));
    } finally {
      setDeleteingId(null);
    }
  }

  function handleCheckingredients(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setPantryIngredients(parseIngredients(pantryInput));
  }

  useEffect(() => {
    void loadRecipes();
  }, []);

  return (
    <S.Page>
      {error && <S.ErrorNotice role="alert">{error}</S.ErrorNotice>}
      <S.Layout>
        <S.ListPanel>
          <S.SectionHeading>
            <S.SectionTitle>오늘 만들 수 있는 요리</S.SectionTitle>
            <S.RecipeCount>{recipes.length}개의 레시피</S.RecipeCount>
          </S.SectionHeading>

          <S.PantryPanel onSubmit={handleCheckingredients}>
            <S.PantryLabel htmlFor="pantry">지금 있는 재료</S.PantryLabel>
            <S.PantryRow>
              <S.PantryInput
                id="pantry"
                value={pantryInput}
                onChange={(event) => setPantryInput(event.target.value)}
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
            <S.Cards $scroll={recipes.length > 4}>
              {recipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id}
                  recipe={recipe} 
                  missingIngredients={
                    pantryIngredients === null
                      ? null
                      : findMissingIngredients(recipe, pantryIngredients)
                  }
                  disabled={deletingId === recipe.id}
                  onDelete={(id) => void handelDelete(id)}
                />
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