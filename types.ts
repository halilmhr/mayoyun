export type Grade = 3 | 4 | 5;

export interface Topic {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export interface Unit {
  id: string;
  name: string;
  emoji: string;
  color: string;
  topics: Topic[];
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}