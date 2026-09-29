import { useRef, useState, type RefObject } from "react";
import type { Question } from "../types/quiz";

interface UseQuizResult {
    currentQuestion: number;
    userAnswer: string;
    setUserAnswer: (value: string) => void;
    answers: string[];
    inputRef: RefObject<HTMLInputElement | null>;
    handleSubmit: () => void;
    handleReset: () => void;
}

export const useQuiz = (questions: Question[]): UseQuizResult => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [answers, setAnswers] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (): void => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = userAnswer;
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setUserAnswer("");
        setTimeout(() => inputRef.current?.focus(), 0);
        }
    };

    const handleReset = (): void => {
        setCurrentQuestion(0);
        setUserAnswer("");
        setAnswers([]);

        if (inputRef.current) {
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    return {
        currentQuestion,
        userAnswer,
        setUserAnswer,
        answers,
        inputRef,
        handleSubmit,
        handleReset,
    };
};