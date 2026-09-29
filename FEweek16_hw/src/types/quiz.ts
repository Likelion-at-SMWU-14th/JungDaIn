export type QuizId = "1" | "2" | "3";

export interface Question {
  readonly question: string;
  readonly answer: string;
  hint?: string;
}