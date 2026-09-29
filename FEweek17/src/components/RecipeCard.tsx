import type { Recipe } from "../types/recipe";
import * as S from "../styles/styled";

interface RecipeCardProps {
  recipe: Recipe;
  disabled: boolean;
  onDelete: (id: Recipe["id"]) => void;
}

export default function RecipeCard({ recipe, disabled, onDelete }: RecipeCardProps) {
  return (
    <S.Card $ready={false}>
      <S.CardTitle>{recipe.title}</S.CardTitle>

      <S.CardLabel>재료</S.CardLabel>
      <S.CardText>{recipe.ingredients}</S.CardText>

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