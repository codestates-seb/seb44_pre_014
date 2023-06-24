package com.server.question.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.server.question.entity.QuestionTag;
import com.server.question.repository.QuestionTagRepository;

@Service
public class QuestionTagService {
    private QuestionTagRepository questionTagRepository;

    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    public void saveQuestionTags(List<QuestionTag> questionTags) {
        questionTagRepository.saveAll(questionTags);
    }
}
