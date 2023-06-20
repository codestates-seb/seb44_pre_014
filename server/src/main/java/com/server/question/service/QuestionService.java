package com.server.question.service;

import org.springframework.stereotype.Service;

import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }
}
