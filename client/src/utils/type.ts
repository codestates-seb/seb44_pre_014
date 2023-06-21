export type TQuestion = {
  writer: string;
  memberId: number;
  questionId: number;
  answers: TAnswer[];
  title: string;
  content: string;
  solve: boolean;
  createdAt: string;
  modifiedAt: string;
};

export type TAnswer = {
  answerId: number;
  comments: TComment[];
  content: string;
  choose: boolean;
  createdAt: string;
  modifiedAt: string;
};

export type TComment = {
  commentId: number;
  content: string;
  createdAt: string;
  modifiedAt;
};
