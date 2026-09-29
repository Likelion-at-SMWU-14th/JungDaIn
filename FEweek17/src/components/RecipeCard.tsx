import type { Recipe } from "../types/recipe";
import * as S from "../styles/styled";

interface RecipeCardProps {
  recipe: Recipe;
  missingIngredients: string[] | null;
  disabled: boolean;
  onDelete: (id: Recipe["id"]) => void;
}

export default function RecipeCard({ 
    recipe, 
    missingIngredients,
    disabled, 
    onDelete 
}: RecipeCardProps) {
    const canCook =
        missingIngredients !== null && missingIngredients.length === 0;
    return (
        <S.Card $ready={false}>
        <S.CardTitle>
            {recipe.title}

            {missingIngredients !== null && (
                <S.CardMark $ready={canCook}>
                    {canCook ? "바로 만들 수 있어요" : "부족한 재료 있음"}
                </S.CardMark>
            )}
        </S.CardTitle>

        <S.CardLabel>재료</S.CardLabel>
        <S.CardText>{recipe.ingredients}</S.CardText>

        {missingIngredients !== null && missingIngredients.length > 0 && (
            <S.MissingRow>
                <span>부족한 재료</span>
                <S.MissingNames>{missingIngredients.join(" . ")}</S.MissingNames>
            </S.MissingRow>
        )}

        <S.CardLabel>조리법</S.CardLabel>
        <S.CardText>{recipe.instructions}</S.CardText>

        <S.CardActions>
            <S.CardButton
            type="button"
            $danger
            disabled={disabled}
            onClick={() => onDelete(recipe.id)}
            >
            삭제
            </S.CardButton>
        </S.CardActions>
        </S.Card>
    );
}