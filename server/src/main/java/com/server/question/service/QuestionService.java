package com.server.question.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.server.answer.entity.Answer;
import com.server.answer.service.AnswerService;
import com.server.comment.entity.Comment;
import com.server.comment.service.CommentService;
import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerService answerService;

    @Autowired
    private CommentService commentService;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question saveQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);

        return savedQuestion;
    }

    public Page<Question> findQuestions(int size, int page) {
        Sort sort1 = Sort.by("createdAt").descending();
        Sort sort2 = Sort.by("questionId").descending();
        Sort sort3 = sort1.and(sort2);

        return questionRepository.findAll(PageRequest.of(page, size, sort3));
        // return questionRepository.findAll();
    }

    public Question findQuestion(long questionId) {
        Optional<Question> optional = questionRepository.findById(questionId);

        return optional.orElseThrow(
            () -> new RuntimeException("찾는 답변이 없습니다."));
    }

    public Page<Question> findQuestionsByKeyword(int size, int page, String keyword) {
        Sort sort1 = Sort.by("createdAt").descending();
        Sort sort2 = Sort.by("questionId").descending();
        Sort sort3 = sort1.and(sort2);

        return questionRepository
                .findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(keyword,
                    keyword,
                    PageRequest.of(page, size, sort3));
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findQuestion(question.getQuestionId());
        Optional.ofNullable(question.getTitle())
                .ifPresent(content -> findQuestion.setTitle(content));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        Optional.ofNullable(question.getSolve())
                .ifPresent(choose -> findQuestion.setSolve(choose));

        Question savedQuestion = questionRepository.save(findQuestion);

        return savedQuestion;
    }

    public void deleteQuestion(long questionId) {
        Question question = findQuestion(questionId);
        List<Answer> answers = question.getAnswers();
        List<Comment> comments = question.getComments();

        for (Comment comment : comments) {
            commentService.deleteComment(comment.getCommentId());
        }
        for (Answer answer : answers) {
            answerService.deleteAnswer(answer.getAnswerId());
        }
        questionRepository.deleteById(questionId);
    }
}
