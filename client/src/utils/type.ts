export type TQuestion = {
  questionId: number;
  voteCount: number;
  answerCount: number;
  viewCount: number;
  title: string;
  content: string;
  tag: { title: string; avatar?: string; link: string }[];
  user: {
    id: number;
    avatar: string;
    name: string;
    award: string;
  };
  createdAt: string;
};
