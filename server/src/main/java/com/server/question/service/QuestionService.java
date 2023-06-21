package com.server.question.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.service.MemberService;
import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;

@Service
public class QuestionService {
    private final MemberService memberService;
    private final QuestionRepository questionRepository;

    public QuestionService(MemberService memberService, QuestionRepository questionRepository) {
        this.memberService = memberService;
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }



    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,
            Sort.by("questionId").descending()));
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        questionRepository.deleteById(questionId);
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion =
            optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

}
