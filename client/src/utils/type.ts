export type TQuestion = {
  questionId: number;
  voteCount: number;
  answerCount: number;
  voteQuantity: number;
  tagNames: string[];
  answers: {
    answerId: number;
    content: string;
    createdAt: string;
    modifiedAt: string;
  }[];
  viewCount: number;
  title: string;
  writer: string;
  content: string;
  tag: { title: string; avatar?: string; link: string }[];
  user: {
    id: number;
    avatar: string;
    name: string;
    award: string;
  };
  createdAt: string;
  modifiedAt: string;
  view: number;
  memberId: number;
  answerId: number;
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
