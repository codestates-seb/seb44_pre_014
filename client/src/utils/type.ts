export type TQuestion = {
  questionId: number;
  voteCount: number;
  answerCount: number;
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
  view: number;
};
