package com.server.answer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.server.answer.entity.Answer;
import com.server.answer.repository.AnswerRepository;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer saveAnswer(Answer answer) {
        Answer savedAnswer = answerRepository.save(answer);

        return savedAnswer;
    }

    public List<Answer> findAnswers(long questionId) {
        return answerRepository.findAllByQuestion_QuestionId(questionId);
    }

    public Answer findAnswer(long answerId) {
        Optional<Answer> optional = answerRepository.findById(answerId);

        return optional.orElseThrow(() -> new RuntimeException("찾는 답변이 없습니다."));
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findAnswer(answer.getAnswerId());
        findAnswer.setContent(answer.getContent());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        Optional.ofNullable(answer.getChoose())
                .ifPresent(choose -> findAnswer.setChoose(choose));

        Answer savedAnswer = answerRepository.save(findAnswer);

        return savedAnswer;
    }

    public void deleteAnswer(long answerId) {
        findAnswer(answerId);
        answerRepository.deleteById(answerId);
    }
}
