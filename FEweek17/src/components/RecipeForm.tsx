import { useState, type SubmitEvent } from "react";
import type { CreateRecipeRequest } from "../types/recipe";
import * as S from "../styles/styled";

interface RecipeFormProps {
    disabled: boolean;
    onSubmit: (values: CreateRecipeRequest) => Promise<boolean>;
}

export default function RecipeForm({ disabled, onSubmit }: RecipeFormProps) {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    async function handleSubmit(event : SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const saved = await onSubmit({
            title: title.trim(),
            ingredients: ingredients.trim(),
            instructions: instructions.trim(),
        });

        if (saved) {
            setTitle("");
            setIngredients("");
            setInstructions("");
        }
    }

    return (
        <S.FormPanel onSubmit={handleSubmit}>
        <S.FormTitle>레시피 추가</S.FormTitle>

        <S.FormLabel htmlFor="recipe-name">레시피 이름</S.FormLabel>
        <S.FieldInput 
            id="recipe-name" 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="예: 🍙 참치 주먹밥"
            required
        />

        <S.FormLabel htmlFor="ingredients">재료</S.FormLabel>
        <S.FieldTextarea
            id="ingredients" 
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
            placeholder="쉼표로 구분해 주세요!" 
            rows={3}
            required
        />

        <S.FormLabel htmlFor="instructions">조리법</S.FormLabel>
        <S.FieldTextarea
            id="instructions"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            placeholder="조리 순서를 간단히 적어 주세요!"
            rows={5}
            required
        />

        <S.PrimaryButton type="submit" disabled={disabled}>
            {disabled ? "저장 중.." : "레시피 저장"}
            </S.PrimaryButton>
        </S.FormPanel>
    );
}