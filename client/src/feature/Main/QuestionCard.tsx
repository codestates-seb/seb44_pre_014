import styled from 'styled-components';
import moment from 'moment';
import Tag from 'components/Tag/Tag';
import { TQuestion } from 'utils/type';

type TProps = {
  questionData: TQuestion;
};

const QuestionCard: React.FC<TProps> = ({ questionData }) => {
  const {
    questionId,
    title,
    content,
    writer,
    createdAt,
    tagNames,
    memberId,
    voteQuantity,
    view,
    answers,
  } = questionData;

  const handleImgError = (e) => {
    e.target.src = 'https://i.ibb.co/gwgngJy/cutecat.jpg';
    //프로필이미지가 없을때 기본 프로필!
  };

  return (
    <StyledQuestionCard>
      <PostSummary>
        <div className="post-summary-item black">
          <span>{voteQuantity}</span>
          <span>votes</span>
        </div>
        <div className="post-summary-item gray">
          <span>{answers.length}</span>
          <span>answers</span>
        </div>
        <div className="post-summary-item gray">
          <span>{view}</span>
          <span>views</span>
        </div>
      </PostSummary>
      <PostContent>
        <Title>
          <a className="title-link" href={`/questions/${questionId}`}>
            {title}
          </a>
        </Title>
        <Excerpt>{content}</Excerpt>
        <PostContentMeta>
          <TagList>
            {tagNames.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </TagList>
          <UserCard>
            <a className="user-card-link" href={`/profile/${memberId}`}>
              {/* <img className="user-card-link--avatar" src={avatar} /> */}
              <img
                onError={handleImgError}
                className="user-card-link--avatar"
                src={`http://teamdev.shop/members/${memberId}/files`}
              />
              <span className="user-card-link--name">{writer}</span>
            </a>
            {/* <span className="user-card-awards">{award}</span> */}
            <span className="user-card-time">
              asked {moment(createdAt).fromNow()}
            </span>
          </UserCard>
        </PostContentMeta>
      </PostContent>
    </StyledQuestionCard>
  );
};

export default QuestionCard;

const StyledQuestionCard = styled.div`
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid var(--black-075);

  &:first-child {
    border-top: 1px solid var(--black-075);
  }
`;

const PostSummary = styled.div`
  display: flex;
  margin-bottom: 4px;
  gap: 6px;
  flex-wrap: wrap;

  font-weight: 500;

  .post-summary-item {
    display: inline-flex;
    gap: 2px;
    font-size: 13px;

    &.black {
      color: var(--black);
    }

    &.gray {
      color: var(--black-500);
    }
  }
`;

const PostContent = styled.div``;

const Title = styled.div`
  margin-bottom: 6px;

  .title-link {
    color: var(--blue-600);
    font-size: 17px;
    word-break: break-word;
    overflow-wrap: break-word;
    text-decoration: none;

    &:hover {
      color: var(--blue-500);
    }
  }
`;

const Excerpt = styled.div`
  font-size: 11px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-bottom: 8px;
`;

const PostContentMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 8px;
  column-gap: 6px;
`;

const TagList = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 6px;
`;

const UserCard = styled.div`
  font-size: 12px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-end;
  margin-left: auto;

  .user-card-link {
    height: 16px;
    align-items: center;
    display: flex;
    text-decoration: none;
    gap: 6px;

    .user-card-link--avatar {
      width: 16px;
      height: 16px;
      border-radius: 4px;
    }

    .user-card-link--name {
      color: var(--blue-600);

      &:hover {
        color: var(--blue-500);
      }
    }
  }

  .user-card-awards {
    font-weight: 800;
    color: var(--black-600);
  }

  .user-card-time {
    color: var(--black-600);
  }
`;
