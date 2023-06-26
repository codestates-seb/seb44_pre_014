import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import API from 'services/api/index';

type Eprops = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  id: number;
};

const EditAnswer: React.FC<Eprops> = ({ setIsEdit, content, id }) => {
  const editInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    handleEdit;
  }, [content]);

  const handleEdit = async () => {
    const enteredText = editInputRef.current?.value;

    try {
      await API.PATCH({
        url: `/answers/${id}/edit`,
        data: { content: enteredText, choose: true },
      });
      console.log('요청성공');
    } catch (err) {
      console.error(err);
    }
    setIsEdit(false);
  };
  const handlecancel = () => {
    setIsEdit(false);
  };
  return (
    <>
      <EditContainer>
        <textarea defaultValue={content} ref={editInputRef} />
        <ButtonContainer>
          <Button onClick={handleEdit}>edit</Button>
          <Button
            onClick={handlecancel}
            color="var(--blue-500)"
            bgColor="var(--white)"
            hoverColor="var(--blue-800)"
            hoverBgColor="var(--white)"
          >
            cancel
          </Button>
        </ButtonContainer>
      </EditContainer>
    </>
  );
};

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  textarea {
    width: 500px;
    height: 150px;
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default EditAnswer;
