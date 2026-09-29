import type { Recipe } from "../types/recipe";
import * as S from "../styles/styled";

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <S.Card $ready={false}>
      <S.CardTitle>{recipe.title}</S.CardTitle>

      <S.CardLabel>재료</S.CardLabel>
      <S.CardText>{recipe.ingredients}</S.CardText>

      <S.CardLabel>조리법</S.CardLabel>
      <S.CardText>{recipe.instructions}</S.CardText>
    </S.Card>
  );
}